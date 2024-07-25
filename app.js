function loco(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
loco()

var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})

function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./Canvas/frames00007.png
  ./Canvas/frames00010.png
  ./Canvas/frames00013.png
  ./Canvas/frames00016.png
  ./Canvas/frames00019.png
  ./Canvas/frames00022.png
  ./Canvas/frames00025.png
  ./Canvas/frames00028.png
  ./Canvas/frames00031.png
  ./Canvas/frames00034.png
  ./Canvas/frames00037.png
  ./Canvas/frames00040.png
  ./Canvas/frames00043.png
  ./Canvas/frames00046.png
  ./Canvas/frames00049.png
  ./Canvas/frames00052.png
  ./Canvas/frames00055.png
  ./Canvas/frames00058.png
  ./Canvas/frames00061.png
  ./Canvas/frames00064.png
  ./Canvas/frames00067.png
  ./Canvas/frames00070.png
  ./Canvas/frames00073.png
  ./Canvas/frames00076.png
  ./Canvas/frames00079.png
  ./Canvas/frames00082.png
  ./Canvas/frames00085.png
  ./Canvas/frames00088.png
  ./Canvas/frames00091.png
  ./Canvas/frames00094.png
  ./Canvas/frames00097.png
  ./Canvas/frames00100.png
  ./Canvas/frames00103.png
  ./Canvas/frames00106.png
  ./Canvas/frames00109.png
  ./Canvas/frames00112.png
  ./Canvas/frames00115.png
  ./Canvas/frames00118.png
  ./Canvas/frames00121.png
  ./Canvas/frames00124.png
  ./Canvas/frames00127.png
  ./Canvas/frames00130.png
  ./Canvas/frames00133.png
  ./Canvas/frames00136.png
  ./Canvas/frames00139.png
  ./Canvas/frames00142.png
  ./Canvas/frames00145.png
  ./Canvas/frames00148.png
  ./Canvas/frames00151.png
  ./Canvas/frames00154.png
  ./Canvas/frames00157.png
  ./Canvas/frames00160.png
  ./Canvas/frames00163.png
  ./Canvas/frames00166.png
  ./Canvas/frames00169.png
  ./Canvas/frames00172.png
  ./Canvas/frames00175.png
  ./Canvas/frames00178.png
  ./Canvas/frames00181.png
  ./Canvas/frames00184.png
  ./Canvas/frames00187.png
  ./Canvas/frames00190.png
  ./Canvas/frames00193.png
  ./Canvas/frames00196.png
  ./Canvas/frames00199.png
  ./Canvas/frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()


var clutters = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutters += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutters;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})

function canvas1(){
    const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
  });
  
  function files(index) {
  var data = `
  ./Canvas/bridges00004.png
  ./Canvas/bridges00007.png
  ./Canvas/bridges00010.png
  ./Canvas/bridges00013.png
  ./Canvas/bridges00016.png
  ./Canvas/bridges00019.png
  ./Canvas/bridges00022.png
  ./Canvas/bridges00025.png
  ./Canvas/bridges00028.png
  ./Canvas/bridges00031.png
  ./Canvas/bridges00034.png
  ./Canvas/bridges00037.png
  ./Canvas/bridges00040.png
  ./Canvas/bridges00043.png
  ./Canvas/bridges00046.png
  ./Canvas/bridges00049.png
  ./Canvas/bridges00052.png
  ./Canvas/bridges00055.png
  ./Canvas/bridges00058.png
  ./Canvas/bridges00061.png
  ./Canvas/bridges00064.png
  ./Canvas/bridges00067.png
  ./Canvas/bridges00070.png
  ./Canvas/bridges00073.png
  ./Canvas/bridges00076.png
  ./Canvas/bridges00079.png
  ./Canvas/bridges00082.png
  ./Canvas/bridges00085.png
  ./Canvas/bridges00088.png
  ./Canvas/bridges00091.png
  ./Canvas/bridges00094.png
  ./Canvas/bridges00097.png
  ./Canvas/bridges00100.png
  ./Canvas/bridges00103.png
  ./Canvas/bridges00106.png
  ./Canvas/bridges00109.png
  ./Canvas/bridges00112.png
  ./Canvas/bridges00115.png
  ./Canvas/bridges00118.png
  ./Canvas/bridges00121.png
  ./Canvas/bridges00124.png
  ./Canvas/bridges00127.png
  ./Canvas/bridges00130.png
  ./Canvas/bridges00133.png
  ./Canvas/bridges00136.png
  ./Canvas/bridges00139.png
  ./Canvas/bridges00142.png
  ./Canvas/bridges00145.png
  ./Canvas/bridges00148.png
  ./Canvas/bridges00151.png
  ./Canvas/bridges00154.png
  ./Canvas/bridges00157.png
  ./Canvas/bridges00160.png
  ./Canvas/bridges00163.png
  ./Canvas/bridges00166.png
  ./Canvas/bridges00169.png
  ./Canvas/bridges00172.png
  ./Canvas/bridges00175.png
  ./Canvas/bridges00178.png
  ./Canvas/bridges00181.png
  ./Canvas/bridges00184.png
  ./Canvas/bridges00187.png
  ./Canvas/bridges00190.png
  ./Canvas/bridges00193.png
  ./Canvas/bridges00196.png
  ./Canvas/bridges00199.png
  ./Canvas/bridges00202.png
  `;
  return data.split("\n")[index];
  }
  
  const frameCount = 67;
  
  const images = [];
  const imageSeq = {
  frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
  }
  
  gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page5`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
  scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
  }
  ScrollTrigger.create({
  
  trigger: "#page5",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
  });
  }
  canvas1()


  var clutter2 = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter2 += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter2;
})

gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})


function canvas2(){
    const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
  });
  
  function files(index) {
  var data = `
  ./Canvas/1page.webp
  ./Canvas/2page.webp
  ./Canvas/3page.webp
  ./Canvas/4page.webp
  ./Canvas/5page.webp
  ./Canvas/6page.webp
  ./Canvas/7page.webp
  ./Canvas/8page.webp
  ./Canvas/9page.webp
  ./Canvas/10page.webp
  ./Canvas/11page.webp
  ./Canvas/12page.webp
  ./Canvas/13page.webp
  ./Canvas/14page.webp
  ./Canvas/15page.webp
  ./Canvas/16page.webp
  ./Canvas/17page.webp
  ./Canvas/18page.webp
  ./Canvas/19page.webp
  ./Canvas/20page.webp
  ./Canvas/21page.webp
  ./Canvas/22page.webp
  ./Canvas/23page.webp
  ./Canvas/24page.webp
  ./Canvas/25page.webp
  ./Canvas/26page.webp
  ./Canvas/27page.webp
  ./Canvas/28page.webp
  ./Canvas/29page.webp
  ./Canvas/30page.webp
  ./Canvas/31page.webp
  ./Canvas/32page.webp
  ./Canvas/33page.webp
  ./Canvas/34page.webp
  ./Canvas/35page.webp
  ./Canvas/36page.webp
  ./Canvas/37page.webp
  ./Canvas/38page.webp
  ./Canvas/39page.webp
  ./Canvas/40page.webp
  ./Canvas/41page.webp
  ./Canvas/42page.webp
  ./Canvas/43page.webp
  ./Canvas/44page.webp
  ./Canvas/45page.webp
  ./Canvas/46page.webp
  ./Canvas/47page.webp
  ./Canvas/48page.webp
  ./Canvas/49page.webp
  ./Canvas/50page.webp
  ./Canvas/51page.webp
  ./Canvas/52page.webp
  ./Canvas/53page.webp
  ./Canvas/54page.webp
  ./Canvas/55page.webp
  ./Canvas/56page.webp
  ./Canvas/57page.webp
  ./Canvas/58page.webp
  ./Canvas/59page.webp
  ./Canvas/60page.webp
  ./Canvas/61page.webp
  ./Canvas/62page.webp
  ./Canvas/63page.webp
  ./Canvas/64page.webp
  ./Canvas/65page.webp
  ./Canvas/66page.webp
  ./Canvas/67page.webp
  ./Canvas/68page.webp
  ./Canvas/69page.webp
  ./Canvas/70page.webp
  ./Canvas/71page.webp
  ./Canvas/72page.webp
  ./Canvas/73page.webp
  ./Canvas/74page.webp
  ./Canvas/75page.webp
  ./Canvas/76page.webp
  ./Canvas/77page.webp
  ./Canvas/78page.webp
  ./Canvas/79page.webp
  ./Canvas/80page.webp
  ./Canvas/81page.webp
  ./Canvas/82page.webp
  ./Canvas/83page.webp
  ./Canvas/84page.webp
  ./Canvas/85page.webp
  ./Canvas/86page.webp
  ./Canvas/87page.webp
  ./Canvas/88page.webp
  ./Canvas/89page.webp
  ./Canvas/90page.webp
  ./Canvas/91page.webp
  ./Canvas/92page.webp
  ./Canvas/93page.webp
  ./Canvas/94page.webp
  ./Canvas/95page.webp
  ./Canvas/96page.webp
  ./Canvas/97page.webp
  ./Canvas/98page.webp
  ./Canvas/99page.webp
  ./Canvas/100page.webp
  ./Canvas/101page.webp
  ./Canvas/102page.webp
  ./Canvas/103page.webp
  ./Canvas/104page.webp
  ./Canvas/105page.webp
  ./Canvas/106page.webp
  ./Canvas/107page.webp
  ./Canvas/108page.webp
  ./Canvas/109page.webp
  ./Canvas/110page.webp
  ./Canvas/111page.webp
  ./Canvas/112page.webp
  ./Canvas/113page.webp
  ./Canvas/114page.webp
  ./Canvas/115page.webp
  ./Canvas/116page.webp
  ./Canvas/117page.webp
  ./Canvas/118page.webp
  ./Canvas/119page.webp
  ./Canvas/120page.webp
  ./Canvas/121page.webp
  ./Canvas/122page.webp
  ./Canvas/123page.webp
  ./Canvas/124page.webp
  ./Canvas/125page.webp
  ./Canvas/126page.webp
  ./Canvas/127page.webp
  ./Canvas/128page.webp
  ./Canvas/129page.webp
  ./Canvas/130page.webp
  ./Canvas/131page.webp
  ./Canvas/132page.webp
  ./Canvas/133page.webp
  ./Canvas/134page.webp
  ./Canvas/135page.webp
  ./Canvas/136page.webp
  `;
  return data.split("\n")[index];
  }
  
  const frameCount = 136;
  
  const images = [];
  const imageSeq = {
  frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
  }
  
  gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page7`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
  scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
  }
  ScrollTrigger.create({
  
  trigger: "#page7",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
  });
  }
  canvas2()
  
 