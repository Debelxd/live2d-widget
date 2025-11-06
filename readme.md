# Live2D_API

> The self-built `live2d API` is used to introduce billboard girls on the web page.

## Preface To start with

- The API construction method of this project refers to [fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)。
- The code of this project is referenced from [stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)。
- This project model comes from [Eikanya/Live2d-model](https://github.com/Eikanya/Live2d-model)，It is for learning and communication only, please do not use it for commercial purposes. If there is any infringement, please contact us to delete it.

## characteristic Feature

1. The Live2D API is fully CDN-ified with a simple directory structure, making it easy to edit, add and delete models.
2. Add the function of model skin order switching for Live2D models loaded in CDN mode.
3. Split the project configuration file into `<script>` and `<link>` tags to facilitate website introduction.

   <img src="./img/01.png" height="300px" ><img src="./img/02.png" height="300px" >

## How to use

You can use `jsdelivr` and `npm` mirror nodes to introduce relevant files to your website, and determine the position of your billboard girl and the model material switching method based on the imported files.

1.Use `jsdelivr` to import.


   ```html
   <!-- Switch model materials sequentially -->
<script src="https://cdn.jsdelivr.net/gh/Debelxd/live2d-widget@latest/jsdelivr/sequential/autoload.min.js"></script>

<!-- Randomly switch model materials -->
<script src="https://cdn.jsdelivr.net/gh/Debelxd/live2d-widget@latest/jsdelivr/random/autoload.min.js"></script>

<!-- The poster girl is on the left -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Debelxd/live2d-widget@latest/css/left.min.css"/>

<!-- The poster girl is on the right -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Debelxd/live2d-widget@latest/css/right.min.css"/>
   ```

2. Use domestic `npm` mirror node to import.

   ```html
   <!-- Switch model materials sequentially -->
   <script src="https://unpkg.com/Debelxd/live2d-widget@latest/npm/sequential/autoload.js"></script>
   <!-- Randomly switch model materials -->
   <script src="https://unpkg.com/Debelxd/live2d-widget@latest/npm/random/autoload.js"></script>

   <!-- The poster girl is on the left -->
   <link
     rel="stylesheet"
     href="https://unpkg.com/Debelxd/live2d-widget@latest/css/left.css"
   />
   <!-- The poster girl is on the right -->
   <link
     rel="stylesheet"
     href="https://unpkg.com/Debelxd/live2d-widget@latest/css/right.css"
   />
   ```

> You can download `js` and `css` files for customized configuration, please refer to [ live2d-widget Configuration](https://github.com/stevenjoezhang/live2d-widget#%E9%85%8D%E7%BD%AE-configuration)。

## Achievement

1. Fixed the file path error and file name error of live2d models such as Girls Frontline, made relevant adaptations to the display viewport of the model, and fixed the problem of error reporting when switching models.

> ~~This part is the ultimate torture, I will beat you to death if you don’t do it a second time。~~

2. Fixed some model voice and interactive action configuration errors.
3. Configure the left and right `css` files separately, add the `js` files for sequential switching of model materials, and configure the `js` files for random switching and sequential switching respectively.
