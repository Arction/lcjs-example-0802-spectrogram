(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,n)=>{const a=n(89),{lightningChart:s,PalettedFill:r,LUT:o,emptyFill:i,emptyLine:l,AxisScrollStrategies:c,AxisTickStrategies:d,ColorHSV:u,synchronizeAxisIntervals:m,regularColorSteps:h,Themes:y}=a,p=new(window.AudioContext||window.webkitAudioContext),f=4096,g=2048,x=s(),C=(e,t,n)=>{const a=Array.from(e),s=Array.from(Array(t)).map((()=>Array.from(Array(n))));for(let e=0;e<t;e+=1)for(let r=0;r<n;r+=1)s[e][r]=a[r*t+e];return s},w=(e,t,n,a,s,u,m,y)=>{const p=e.createChartXY({columnIndex:0,columnSpan:1,rowIndex:t,rowSpan:1}).setTitleFillStyle(i),f=p.getTheme(),g=e=>m+e/255*(y-m),x={x:0,y:0},C={x:u,y:Math.ceil(s/2)},w=p.addHeatmapGridSeries({columns:a,rows:Math.ceil(n/2),start:x,end:C,dataOrder:"rows",heatmapDataType:"intensity"}).setFillStyle(new r({lut:new o({steps:h(0,255,f.examples.spectrogramColorPalette,{formatLabels:e=>`${Math.round(g(e))}`}),units:"dB",interpolate:!0})})).setWireframeStyle(l).setCursorResultTableFormatter(((e,t,n)=>e.addRow(t.getName()).addRow("X:","",t.axisX.formatValue(n.x)).addRow("Y:","",t.axisY.formatValue(n.y)).addRow("",g(n.intensity).toFixed(1)+" dB")));return w.axisX.setInterval({start:x.x,end:C.x,stopAxisAfter:!1}).setTickStrategy(d.Empty).setTitleMargin(0).setScrollStrategy(void 0).setMouseInteractions(!1),p.setPadding({left:0,top:8,right:8,bottom:1}).setMouseInteractions(!1),w.axisY.setInterval({start:x.y,end:C.y,stopAxisAfter:!1}).setTitle(`Channel ${t+1} (Hz)`).setScrollStrategy(c.fitting),{chart:p,series:w}};(async()=>{document.querySelectorAll(".loading").forEach((e=>{e.parentElement.removeChild(e)}));const e=async()=>{const e=await(async e=>{const t=await fetch(e),n=await t.arrayBuffer();return await p.decodeAudioData(n)})(document.head.baseURI+"examples/assets/0802/Truck_driving_by-Jason_Baker-2112866529_edit.wav");(async e=>{const t=x.Dashboard({numberOfColumns:1,numberOfRows:e.channels.length}).setSplitterStyle(l),n=[];for(let a=0;a<e.channels.length;a+=1){const s=w(t,a,e.stride,e.tickCount,e.maxFreq,e.duration,e.channelDbRanges[a].minDecibels,e.channelDbRanges[a].maxDecibels),r=C(e.channels[a],e.stride,e.tickCount).slice(0,e.stride/2);s.series.invalidateIntensityValues({iRow:0,iColumn:0,values:r}),n.push(s)}n[n.length-1].series.axisX.setTickStrategy(d.Numeric).setScrollStrategy(c.fitting).setTitle("Duration (s)");const a=t.addLegendBox().setAutoDispose({type:"max-width",maxWidth:.3}).setPosition({x:100,y:50}).setOrigin({x:1,y:0});n.forEach((e=>a.add(e.chart)));const s=n.map((e=>e.series.axisX));m(...s)})(await(async e=>{const t=new OfflineAudioContext(e.numberOfChannels,e.length,e.sampleRate),n=t.createBufferSource();n.buffer=e,n.channelCount=e.numberOfChannels;const a=t.createChannelSplitter(n.channelCount),s=t.createAnalyser();s.fftSize=f,s.smoothingTimeConstant=.1;const r=[],o=[],i=[];for(let s=0;s<n.channelCount;s+=1)r[s]=new Uint8Array(e.length/g*2048),i[s]=t.createAnalyser(),i[s].smoothingTimeConstant=.1,i[s].fftSize=f,a.connect(i[s],s),o.push({minDecibels:i[s].minDecibels,maxDecibels:i[s].maxDecibels});t.createScriptProcessor=t.createScriptProcessor||t.createJavaScriptNode;const l=t.createScriptProcessor(g,1,1);let c=0;return l.onaudioprocess=e=>{for(let e=0;e<n.channelCount;e+=1){const t=new Uint8Array(r[e].buffer,c,i[e].frequencyBinCount);i[e].getByteFrequencyData(t)}c+=s.frequencyBinCount},n.connect(a),n.connect(l),l.connect(t.destination),n.connect(s),n.start(0),await t.startRendering(),{channels:r,channelDbRanges:o,stride:2048,tickCount:Math.ceil(e.length/g),maxFreq:t.sampleRate/2,duration:e.duration}})(e))};if("suspended"===p.state){const t=document.createElement("div");t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.right="0",t.style.bottom="0";const n=document.createElement("img");n.crossOrigin="",n.src=document.head.baseURI+"examples/assets/0802/play_circle_outline-24px.svg",n.style.width="100%",n.style.height="100%",t.onclick=()=>{p.resume()},t.appendChild(n);const a=document.querySelector(".chart");let s;a||(s=document.createElement("div"),s.classList.add("inner"),document.body.appendChild(s));const r=a||s;r.appendChild(t),p.onstatechange=()=>{"running"===p.state&&(e(),p.onstatechange=void 0,r.removeChild(t))}}else e()})()}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);