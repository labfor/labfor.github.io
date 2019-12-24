(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(e,t,n){e.exports=n.p+"assets/img/deepburing.50d5f86b.svg"},203:function(e,t,n){e.exports=n.p+"assets/img/npu.eaf61c51.svg"},207:function(e,t,n){"use strict";n.r(t);var a=n(0),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("br"),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("DeepBurning [1] is an end-to-end neural network acceleration design tool that generates both customized neural network model and neural processing unit (NPU) for a specialized learning task on FPGAs. The overview of DeepBurning is shown in Figure 1. It only requires the dataset of the target application and high-level design constraints such as total resource budget to produce a unified optimized acceleration solution targeting at a typical heterogeneous CPU+FPGA architecture that can be immediately deployed, while the application developers can focus on the application development without dealing with the complex neural network model designing nor the low-level accelerator parameter tuning. Particularly, we propose an efficient co-designed autoML search framework named YOSO [2] that seeks to optimize the neural network architecture and the NPU parameters at the same time. Note that DeepBurning relies on a pre-built NPU template that allows flexible configuration and customization. The template is supposed to be developed by skilled hardware designers to ensure efficient hardware implementation.")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:n(202),width:"100%",height:"100%"}}),e._v(" "),a("br"),e._v(" "),a("div",{staticStyle:{display:"inline-block",color:"#999",padding:"2px"}},[e._v(" Figure 1 DeepBuring Overview")])]),e._v(" "),a("p",[e._v("DeepBurning is under active development. The major components including YOSO and NPU compilation are already in use while the automatic NPU generation based on the pre-built template still needs quite some handcrafted adjustment. We will put it online soon when we get it ready. Currently, we only allow the users to compile neural network models to a specific NPU configuration.")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"key-features-and-update-news"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-features-and-update-news"}},[e._v("#")]),e._v(" Key features and update news")]),e._v(" "),a("p",[e._v("Supported")]),e._v(" "),a("ul",[a("li",[e._v("Given high-level design constraints, YOSO can be used to search for the optimized neural network architecture and NPU configuration.")]),e._v(" "),a("li",[e._v("Neural network models described in Prototxt can be compiled to instructions and then deployed on the pre-built NPU. Currently, we just provide some pre-compiled neural networks and we will offer a free on-line compiler later.")]),e._v(" "),a("li",[e._v("A typical NPU with 2D array computing architecture is provided as a netlist. Its architecture is shown in Figure 2. It consists of 128 KB I/O buffer that can be allocated for input and output dynamically and supports data prefetch to hide the external memory access overhead. It covers a large number of typical operations utilized in typical neural networks and relevant image processing operations, so it supports more than 30 neural networks. The supported operations and neural network models are listed in Table 1.")]),e._v(" "),a("li",[e._v("The generated accelerators and drivers can be utilized in Xilinx Zynq 7000 devices. Particularly, the design is verified on ZC706 and MZ7100. The corresponding Linux kernel and root file system is also provided.")])]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:n(203),width:"60%",height:"60%"}}),e._v(" "),a("br"),e._v(" "),a("div",{staticStyle:{display:"inline-block",color:"#999",padding:"2px"}},[e._v("Figure 2 NPU Architecture")])]),e._v(" "),a("br"),e._v(" "),a("div",{attrs:{align:"center"}},[a("div",{staticStyle:{display:"inline-block",color:"#999",padding:"2px"}},[e._v(" Table 1 Supported NPU operations and neural network models")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Neural network operations")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("General computing operations")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Neural network models")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Convolution, deconvolution, 3D convolution, grouped convolution, Full connection, Softmax, Elementwise, Concat, Reorganization, Batch normalization, Pooling (average, max) Activation function (Relu, Prelu, Leaky Relu, tanh, Sigmoid, …)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Matrix-matrix multiplication, Matrix-vector multiplication, Dot-production, Cosine distance, Feature scaling")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("GoogleNet, DenseNet, VGG, ResNet, MobileNet, SqueezeNet, DCGAN, LSTM, MTCNN, Hourglass, …")])])])]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"performance-evaluation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-evaluation"}},[e._v("#")]),e._v(" Performance evaluation")]),e._v(" "),a("p",[e._v("We measure the performance and the FPGA resource consumption on MZ7100 board which includes a Zynq 7100 FPGA chip. The NPU kernel runs at 100 MHz and it can be optimized up to 200 MHz. The measured fps on ImageNet is shown in Table 2 and the total FPGA resource overhead is presented in Table 3.")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("div",{staticStyle:{display:"inline-block",color:"#999",padding:"2px"}},[e._v(" Table 2 Performance Evaluation")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Neural Network Models")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Fps (100 MHz)")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Fps (200 MHz)")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("ResNet")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("xxx")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("xxx")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("xxx")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("xxx")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("xxx")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("xxx")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("xxx")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("xxx")])])])]),e._v(" "),a("br"),e._v(" "),a("div",{attrs:{align:"center"}},[a("div",{staticStyle:{display:"inline-block",color:"#999",padding:"2px"}},[e._v(" Table 3 NPU resource consumption on MZ7100")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("LUT")]),e._v(" "),a("th",[e._v("BRAM")]),e._v(" "),a("th",[e._v("DSP")]),e._v(" "),a("th",[e._v("FF")]),e._v(" "),a("th",[e._v("IO")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Xxx")]),e._v(" "),a("td",[e._v("dsds")]),e._v(" "),a("td",[e._v("DSP")]),e._v(" "),a("td",[e._v("FF")]),e._v(" "),a("td",[e._v("IO")])])])]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"demo-video"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo-video"}},[e._v("#")]),e._v(" Demo video")]),e._v(" "),a("p",[e._v("We also present two application videos in which we utilize DeepBurning to generate the acceleration solution on MZ7100 board.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Realtime object detection")])]),e._v(" "),a("li",[a("p",[e._v("Realtime style transfer")])])]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"how-to-cite-deepburning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-cite-deepburning"}},[e._v("#")]),e._v(" How to cite DeepBurning?")]),e._v(" "),a("p",[e._v("If you use DeepBurning in your paper, please cite our work.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@inproceedings{wang2016deepburning,\n  title={DeepBurning: automatic generation of FPGA-based learning accelerators for the neural network family},\n  author={Wang, Ying and Xu, Jie and Han, Yinhe and Li, Huawei and Li, Xiaowei},\n  booktitle={Proceedings of the 53rd Annual Design Automation Conference},\n  pages={110},\n  year={2016},\n  organization={ACM}\n}\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);