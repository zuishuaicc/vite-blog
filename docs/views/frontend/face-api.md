---
outline: deep
---
# face-api实现人脸识别（基于TensorFlow）
## 1.安装依赖
```bash
npm install @vladmandic/face-api
```
## 2.定义一个摄像机控制类
```ts
/* ./videoController.ts */
export class VideoController {
  private width: number
  private height: number
  private container: HTMLElement
  public overlay: HTMLCanvasElement | null = null
  public videoElement: HTMLVideoElement
  constructor(width: number, height: number, container: HTMLElement = document.body) {
    this.videoElement = document.createElement('video')
    this.width = width
    this.height = height
    this.container = container
  }
  // 创建video
  createVideo() {
    this.videoElement.width = this.width
    this.videoElement.height = this.height
    this.videoElement.autoplay = true
    this.videoElement.muted = true
    this.videoElement.controls = false
    // this.videoElement.style.display = 'none'
    // this.videoElement.style.position = 'absolute'
    // this.videoElement.style.top = '0px'
    // this.videoElement.style.left = '0px'
    this.videoElement.setAttribute('playsinline', 'playsinline')
    this.container.append(this.videoElement)
    this.createOverlay()
    // this.container.style.position = 'relative'
  }
  // 创建mask
  createOverlay() {
    this.overlay = document.createElement('canvas')
    this.overlay.width = this.width
    this.overlay.height = this.height
    this.overlay.style.position = 'absolute'
    this.overlay.style.top = '0px'
    this.overlay.style.left = '0px'
    this.container.append(this.overlay)
  }
  // 设置video路径
  setSrc(url: string) {
    this.videoElement.src = url
  }
  // 开启摄像头
  async getCamera() {
    const mediaDevices = navigator.mediaDevices
    console.log('开始获取摄像头数据')
    const stream = await mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          width: {
            // min: 1280,
            ideal: this.height
            // max: 2560,
          },
          height: {
            // min: 720,
            ideal: this.width
            // max: 1440
          },
          facingMode: 'user' //优先使用前置摄像头
        }
      })
      .catch((err) => {
        console.log('摄像头数据获取失败', err)
      })

    if (stream) {
      console.log('获取到摄像头数据', stream.getTracks())
      this.videoElement.srcObject = stream
      this.videoElement.play()
      // this.videoElement.style.transform = 'rotateY(180deg)'
      // this.videoElement.style.opacity = '0'
      this.videoElement.onloadedmetadata = () => {
        // const cameraSize = {
        //     'width': this.videoElement.offsetWidth,
        //     'height': this.videoElement.offsetHeight
        // }
        // if (window.innerWidth < window.innerHeight) {
        //     // 竖屏
        //     if (cameraSize.height < window.innerHeight) {
        //         console.log(document.body.offsetHeight)
        //         this.videoElement.setAttribute('height', document.body.offsetHeight.toString() + 'px');
        //     }
        // }
        // else {
        //     // 横屏
        //     if (cameraSize.width < window.innerWidth) {
        //         this.videoElement.setAttribute('width', document.body.offsetWidth.toString() + 'px');
        //     }
        // }
      }
    }
  }
}

```
## 3.封装成hooks
```ts
/* useFaceApi.ts */
import * as faceapi from '@vladmandic/face-api/dist/face-api.esm.js'
// import * as faceapi from 'face-api.js'
import { VideoController } from './videoController'
function useFaceApi(width = 500, height = 500) {
  const video = ref<null | VideoController>(null) //video实例
  const container = ref<null | HTMLDivElement>(null) //video容器
  let valve = true
  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri(import.meta.env.BASE_URL + '/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri(import.meta.env.BASE_URL + '/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri(import.meta.env.BASE_URL + '/models'),
    faceapi.nets.faceExpressionNet.loadFromUri(import.meta.env.BASE_URL + '/models'),
    faceapi.nets.ageGenderNet.loadFromUri(import.meta.env.BASE_URL + '/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri(import.meta.env.BASE_URL + '/models')
  ])
    .then(() => {
      ElMessage.success('加载模型数据成功')
      console.log('加载模型数据成功')
      // loadCamera()
    })
    .catch((err) => {
      ElMessage.error('加载模型数据失败')
      console.log('人脸识别数据加载失败', err)
    })
  // 加载模型和摄像头
  function loadCamera() {
    video.value = new VideoController(width, height, container.value as HTMLDivElement)
    // 动态创建video容器
    video.value.createVideo()
    ElMessage.success('创建video容器成功')
    console.log('创建video容器成功')
    // 开启摄像头并将摄像头流加载到video
    video.value.getCamera()
    // 监听动态创建video的play事件
    video.value.videoElement.addEventListener('play', () => {
      window.setTimeout(() => {
        // 这里开始获取摄像头的画面
        ElMessage.success('开始人脸识别')
        console.log('开始人脸识别')
        detectiveFace()
      }, 100)
    })
  }
  async function detectiveFace() {
    const detections = await faceapi
      .detectAllFaces(video.value!.videoElement, new faceapi.TinyFaceDetectorOptions()) // 添加各种识别信息
      .withFaceLandmarks() // 人脸区域
      .withFaceExpressions() // 人脸表情
      .withFaceDescriptors() //
      .withAgeAndGender() // 年龄
    if (detections.length < 1) {
      console.log('未检测到人脸')
    }
    // const faceMatcher = new faceapi.FaceMatcher(detections)
    // detections.forEach((fd) => {
    //   const bestMatch = faceMatcher.findBestMatch(fd.descriptor)
    //   console.log('bestMatch', bestMatch)
    // })
    drawDetections(detections)
  }

  function drawDetections(
    detections: faceapi.WithAge<faceapi.WithGender<faceapi.WithFaceDescriptor<faceapi.WithFaceExpressions<faceapi.WithFaceLandmarks<{ detection: faceapi.FaceDetection }, faceapi.FaceLandmarks68>>>>>[]
  ) {
    // 调整检测到的框的大小，以防您显示的图像与原始图像的大小不同
    const toSize = { width: video.value?.videoElement.width as number, height: video.value?.videoElement.height as number }
    const resizedResults = faceapi.resizeResults(detections, toSize)
    // 设置展示的canvas和输入大小保持相同
    faceapi.matchDimensions(video.value?.overlay!, video.value?.videoElement!)
    // 展示矩形框
    faceapi.draw.drawDetections(video.value?.overlay!, resizedResults)
    // 展示人脸标记
    faceapi.draw.drawFaceLandmarks(video.value?.overlay!, resizedResults)
    // 展示表情
    faceapi.draw.drawFaceExpressions(video.value?.overlay!, resizedResults)
    // 展示年龄和性别
    resizedResults.forEach((result: { detection?: any; age?: any; gender?: any; genderProbability?: any }) => {
      const { age, gender, genderProbability } = result
      new faceapi.draw.DrawTextField([`${Math.round(age)} 岁`, `${gender === 'male' ? '男' : '女'} 准确率(${Math.round(genderProbability)})`], result.detection.box.topRight).draw(
        video.value?.overlay!
      )
    })
    if (valve) {
      window.setTimeout(() => {
        detectiveFace()
      }, 100)
    }
  }
  // 停止检测
  function stop() {
    //@ts-ignore
    video.value && video.value.videoElement.srcObject!.getTracks()[0].stop()
    valve = false
    container.value?.removeChild(video.value?.overlay!)
    container.value?.removeChild(video.value?.videoElement!)
  }
  // 开始检测
  function start() {
    if (container.value?.childNodes.length) return
    valve = true
    loadCamera()
  }
  return {
    container,
    video,
    stop,
    start
  }
}

export { useFaceApi }

```
## 4.vue文件中使用hooks
```vue
<script lang="ts" setup>
import { useFaceApi } from '@/hooks/useFaceApi'

const { container, stop, start } = useFaceApi(400, 400)
onUnmounted(() => {
  handleEnd()
})
function handleStart() {
  start()
}
function handleEnd() {
  // video.value && video.value.videoElement.srcObject!.getTracks()[0].stop()
  stop()
}
</script>

<template>
  <div>
    <el-button type="primary" size="default" @click="handleStart">开始</el-button>
    <el-button type="primary" size="default" @click="handleEnd">关闭</el-button>
    <div ref="container" style="position: relative"></div>
  </div>
</template>

<style scoped lang="less"></style>

```