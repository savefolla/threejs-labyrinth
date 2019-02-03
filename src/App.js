import React, {Component} from 'react';
import * as THREE from 'three';
import {random} from './helpers';
import anime from "animejs";

class App extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();

    this.fieldWidth = 100;

    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.cones = [];
    this.light = undefined;
    this.cube = undefined;
    this.plane = undefined;
    this.group = undefined;
    this.pivot = undefined;

    this.bounceAnimation = undefined;

    this.animate = this.animate.bind(this);
    this.init = this.init.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.initListeners = this.initListeners.bind(this);
    this.initScene = this.initScene.bind(this);
    this.initCamera = this.initCamera.bind(this);
    this.initRenderer = this.initRenderer.bind(this);
    this.initCones = this.initCones.bind(this);
    this.initLight = this.initLight.bind(this);
    this.initPlane = this.initPlane.bind(this);
    this.initCube = this.initCube.bind(this);
    this.initGroup = this.initGroup.bind(this);
    this.initPivot = this.initPivot.bind(this);
    this.initBounceAnimation = this.initBounceAnimation.bind(this);
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
    this.initCones();
    this.initCube();
    this.initLight();
    this.initPlane();
    this.initGroup();
    this.initPivot();
    this.initBounceAnimation();
  }

  initListeners() {
    document.addEventListener('keypress', this.onKeyPress);
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
  }

  initScene() {
    this.scene = new THREE.Scene();
    const fogColor = new THREE.Color(0x000000);
    this.scene.background = fogColor;
    this.scene.fog = new THREE.Fog(fogColor, 0.0025, 20);
  };

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.y = 2;
    this.camera.position.z = 3;
  };

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.myRef.current.appendChild(this.renderer.domElement);
  };

  initCones() {
    const coneGeometry = new THREE.ConeGeometry(1, 10, 32);
    const coneMaterial = new THREE.MeshToonMaterial({
      color: 0x2c6810,
      shininess: 0
    });
    for (let i = 0; i < this.fieldWidth * 5; ++i) {
      const cone = new THREE.Mesh(coneGeometry, coneMaterial);
      cone.position.x = random(-this.fieldWidth / 2, this.fieldWidth / 2);
      cone.position.z = random(-this.fieldWidth / 2, this.fieldWidth / 2);
      cone.castShadow = true;
      this.cones.push(cone);
      this.scene.add(cone);
    }
  }

  initLight() {
    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.position.set(this.camera.position.x, this.camera.position.y, this.camera.position.z - 2);
    this.light.target = this.cube;
    this.light.castShadow = true;
    this.scene.add(this.light);
  };

  initPlane() {
    const planeGeometry = new THREE.PlaneGeometry(this.fieldWidth, this.fieldWidth, 1, 1);
    const planeMesh = new THREE.MeshLambertMaterial({color: 0x011d49});
    this.plane = new THREE.Mesh(planeGeometry, planeMesh);
    this.plane.rotation.x = -Math.PI / 2;
    this.plane.receiveShadow = true;
    this.scene.add(this.plane);
  }

  initCube() {
    const cubeGeometry = new THREE.BoxGeometry(.5, .5, 1);
    const cubeMaterial = new THREE.MeshToonMaterial({
      color: 0xff7272,
      shininess: 200
    });
    this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    this.cube.position.y = 1;
    this.cube.castShadow = true;
    this.scene.add(this.cube);
  }

  initGroup() {
    this.group = new THREE.Object3D();
    this.group.add(this.plane);
    this.cones.forEach(cone => this.group.add(cone));
    this.scene.add(this.group);
  }

  initPivot() {
    this.pivot = new THREE.Object3D();
    this.pivot.add(this.group);
    this.scene.add(this.pivot);
  }

  initBounceAnimation() {
    this.bounceAnimation = anime({
      targets: this.cube.position,
      y: 1.2,
      duration: 1200,
      direction: 'alternate',
      easing: 'linear',
      loop: true
    });
    this.bounceAnimation.pause();
  }

  onKeyPress(e) {
    switch (e.key) {
      case 'w':
        this.forward();
        break;
      case 'a':
        this.rotate('left');
        break;
      case 'd':
        this.rotate('right');
        break;
      default:
        break;
    }
  }

  onKeyUp(e) {
    switch (e.key) {
      case 'w':
        this.bounceAnimation.pause();
        break;
      default:
        break;
    }
  }

  onKeyDown(e) {
    switch (e.key) {
      case 'w':
        this.bounceAnimation.play();
        break;
      default:
        break;
    }
  }

  forward() {
    this.group.position.x -= Math.sin(this.pivot.rotation.y) * 0.01;
    this.group.position.z += Math.cos(this.pivot.rotation.y) * 0.01;
  }

  rotate(direction) {
    if (direction === 'right') {
      this.pivot.rotation.y += .01;
    }
    if (direction === 'left') {
      this.pivot.rotation.y -= .01;
    }
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
