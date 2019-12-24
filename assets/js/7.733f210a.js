(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{210:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"_1-neural-network-model-search-yoso"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-neural-network-model-search-yoso"}},[e._v("#")]),e._v(" 1. Neural network model search (YOSO)")]),e._v(" "),a("p",[e._v("We notice that different neural network models deployed on the same neural network processor exhibit distinct computing efficiency even though the overall sizes are similar. Thereby, smaller neural network models do not promise high computing efficiency on neural network accelerators. With this observation, we propose a co-designed customization framework YOSO that searches for the matched neural network models and neural network accelerator configuration at the same time. Particularly, we propose a novel single-shot AutoML strategy to ensure rapid customization with just the data. YOSO is open sourced and can be found in YOSO directory.")]),e._v(" "),a("h3",{attrs:{id:"_2-compile-obtained-neural-network-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-compile-obtained-neural-network-model"}},[e._v("#")]),e._v(" 2. Compile obtained neural network model")]),e._v(" "),a("p",[e._v("We are still working on the background web server to enable on-line compilation. It will be available soon. Currently, we mainly provide the compiled instructions for a few typical neural networks such that users can try it immediately on Zynq platforms. Table 1 presents the summary of the compiled neural networks and the used dataset. All the neural networks are quantized at 8bit. In addition, note that the models are pre-trained on the open datasets, but they are further tuned for some specific scenarios. The compiled models can be found in model-zoo.\n")]),a("div",{attrs:{align:"center"}},[a("div",{staticStyle:{display:"inline-block",color:"#999",padding:"0"}},[e._v(" Table 1 Summary of the pre-compiled neural network models")]),a("p"),e._v(" "),a("br"),e._v(" "),a("table",{staticStyle:{display:"inline"}},[a("tr",[a("th",[e._v("Neural network models                   ")]),e._v(" "),a("th",[e._v("                 Datasets   ")])]),e._v(" "),a("tr",[a("td",[e._v("Resnet18")]),e._v(" "),a("td",[e._v("ImageNet2012")])]),e._v(" "),a("tr",[a("td",[e._v("Yolo v2")]),e._v(" "),a("td",[e._v("Pascal  VOC")])]),e._v(" "),a("tr",[a("td",[e._v("Segmentation")]),e._v(" "),a("td",[e._v("CoCo(MS)")])]),e._v(" "),a("tr",[a("td",[e._v("FaceNet")]),e._v(" "),a("td",[e._v("Webface Vggface2")])]),e._v(" "),a("tr",[a("td",[e._v("MTCNN")]),e._v(" "),a("td",[e._v("Wider_face, CelebA ")])]),e._v(" "),a("tr",[a("td",[e._v("K-point")]),e._v(" "),a("td",[e._v("Mpii")])]),e._v(" "),a("tr",[a("td",[e._v("DCGAN")]),e._v(" "),a("td",[e._v("COCO2014")])])])]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"_3-add-npu-to-pl-of-zynq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-add-npu-to-pl-of-zynq"}},[e._v("#")]),e._v(" 3. Add NPU to PL of Zynq")]),e._v(" "),a("p",[e._v("3.1 Since NPU is wrapped as an HDL-based IP, you can add it directly to Zynq PL with Vivado IP integrator. You can refer to "),a("a",{attrs:{href:"https://www.xilinx.com/support/documentation/sw_manuals/xilinx2017_1/ug995-vivado-ip-subsystems-tutorial.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Xilinx UG995"),a("OutboundLink")],1),e._v(" for detailed flow of adding user design to IP integrator.")]),e._v(" "),a("p",[e._v("3.2  When the NPU is added to PL side as an accelerator, the design can be synthesized and implemented with Vivado.")]),e._v(" "),a("p",[e._v("3.3 After the implementation, you will get the bitstream file and hadware description file (HDF) which will be used in the next step for booting.")]),e._v(" "),a("h3",{attrs:{id:"_4-boot-mz7100-fpga-board"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-boot-mz7100-fpga-board"}},[e._v("#")]),e._v(" 4. Boot MZ7100 FPGA board")]),e._v(" "),a("p",[e._v("4.1 To boot the FPGA board, you need to setup MZ7100 properly according to the user manual provided by the board vendors. For ZC706, you may refer to "),a("a",{attrs:{href:"https://www.xilinx.com/support/documentation/boards_and_kits/zc706/ug954-zc706-eval-board-xc7z045-ap-soc.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Xilinx UG954"),a("OutboundLink")],1),e._v(". For MZ7100, you can refer to "),a("a",{attrs:{href:"https://world.taobao.com/item/567963088192.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("4.2 After the hardware platform setup, we can prepare the BOOT, rootfile system, and linux kernel with Petalinux for booting the board in Linux. Petalinux is a integrated toochain for embedded linux deployment on Xilinx Zynq. Petalinux tutorial can be found at "),a("a",{attrs:{href:"https://xilinx-wiki.atlassian.net/wiki/spaces/A/pages/130973731/PetaLinux+Build+Tutorial+for+2019.1",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("4.3 With petalinux, we can get the rootfile system (boot/rootfs) and the kernel image (boot/kernel). Meanwhile, we can also have the NPU driver and the application compiled with Petalinux with the embedded cross-compiler. The driver and the application can be added to the rootfile system or copied to the FPGA board when the system is booted. The linux diver is located at (boot/driver) and the application demo is located at (boot/app). Finally, we can copy the rootfile system and kernel image to the SD card and boot the FPGA board from SD card.")]),e._v(" "),a("h3",{attrs:{id:"_5-login-and-run-the-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-login-and-run-the-application"}},[e._v("#")]),e._v(" 5. Login and run the application")]),e._v(" "),a("p",[e._v("5.1 When the board is booted, you can now connect to the FPGA board with either COM port or ssh. Then you can login the linux system with root.")]),e._v(" "),a("p",[e._v("5.2  Then you can install the driver if it is not automatically launched and run the demo application.")]),e._v(" "),a("h3",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.github.com/labfor/DeepBurning/blob/master/doc/NPU.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("NPU Manual"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);