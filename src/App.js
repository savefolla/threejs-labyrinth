import React, {Component} from 'react';
import * as THREE from 'three';

class App extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.light = undefined;
    this.cube = undefined;
    this.plane = undefined;

    this.animate = this.animate.bind(this);
    this.init = this.init.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.initListeners = this.initListeners.bind(this);
    this.initScene = this.initScene.bind(this);
    this.initCamera = this.initCamera.bind(this);
    this.initRenderer = this.initRenderer.bind(this);
    this.initLight = this.initLight.bind(this);
    this.initPlane = this.initPlane.bind(this);
    this.initCube = this.initCube.bind(this);
  }

  componentDidMount() {
    this.init();
    this.animate();
  }

  init() {
    this.initListeners();
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initLight();
    this.initPlane();
    this.initCube();
  }

  initListeners() {
    document.addEventListener('keypress', this.onKeyUp);
  }

  initScene() {
    this.scene = new THREE.Scene();
    const fogColor = new THREE.Color(0x000000);
    this.scene.background = fogColor;
    this.scene.fog = new THREE.Fog(fogColor, 0.0025, 20);
  };

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.x = 2.2;
    this.camera.position.y = 4.2;
    this.camera.position.z = 5.4;
    this.camera.rotation.x = -0.6;
    this.camera.rotation.y = 0.3;
    this.camera.rotation.z = 0.2;
  };

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.myRef.current.appendChild(this.renderer.domElement);
  };

  initLight() {
    this.light = new THREE.DirectionalLight(0xffffff, 1, 100);
    this.light.position.set(5, 10, -5);
    this.light.castShadow = true;            // default false
    this.scene.add(this.light);
    var helper = new THREE.DirectionalLightHelper(this.light, 5);

    this.scene.add(helper);
  };

  initPlane() {
    const planeGeometry = new THREE.PlaneGeometry(100, 100, 1, 1);
    const planeMesh = new THREE.MeshLambertMaterial({color: 0x011d49});
    this.plane = new THREE.Mesh(planeGeometry, planeMesh);
    this.plane.rotation.x = -Math.PI / 2;
    this.plane.receiveShadow = true;
    this.scene.add(this.plane);
  }

  initCube() {
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshToonMaterial({
      color: 0xff7272,
      shininess: 200,
    });
    this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    this.cube.position.y = 2;
    this.cube.castShadow = true;
    this.scene.add(this.cube);
  }

  onKeyUp(e) {
    switch (e.key) {
      case 'w':
        this.forward();
        break;
      case 'a':
        this.rotateLeft();
        break;
      case 'd':
        this.rotateRight();
        break;
      default:
        break;
    }
  }

  forward() {
    console.log('forward');
  }

  rotateLeft() {
    console.log('left');
  }

  rotateRight() {
    console.log('right');
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div ref={this.myRef}>
      </div>
    );
  }
}

export default App;
