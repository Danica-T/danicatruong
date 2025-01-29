import React from "react";
import cloth from '../assets/images/Cloth.png';
import raster from '../assets/images/rasterizer.png';
import ray from '../assets/images/raytracing.png';
import modeling from '../assets/images/modeling.png';
import imageedit from '../assets/images/imageEditing.png'
import title from '../assets/images/title.png'
import apple from '../assets/images/apple.png'
import thesis from '../assets/images/thesis.png'

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Danica-T/AppleSiteClone" target="_blank" rel="noreferrer"><img src={apple} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Danica-T/AppleSiteClone" target="_blank" rel="noreferrer"><h2>Apple Site Clone</h2></a>
                <p>Built an Apple site clone using Three.js, GSAP and React.</p>
            </div>
            <div className="project">
                <a href="https://dataspace.princeton.edu/handle/88435/dsp015999n6752" target="_blank" rel="noreferrer"><img src={thesis} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://dataspace.princeton.edu/handle/88435/dsp015999n6752" target="_blank" rel="noreferrer"><h2>It’s Dirty: An Analysis of Rendering Soiled Datasets Using NeRF Based Algorithms</h2></a>
                <p>In this thesis, I explain the approach, implementation, evaluation and conclusions of a novel method to rendering soiled sections of 360◦ outward facing images using a neural radiance field. This approach involves manipulating camera parameters and separating scene space into foreground and background volumes (as seen in NeRF++).</p>
            </div>
            <div className="project">
                <a href="https://github.com/WarrenQuan/cos426finalproject" target="_blank" rel="noreferrer"><img src={title} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/WarrenQuan/cos426finalproject" target="_blank" rel="noreferrer"><h2>Puzzled At Princeton</h2></a>
                <p>Created a game with a team of 3 from scratch using JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Danica-T/Cloth-Simulation" target="_blank" rel="noreferrer"><img src={cloth} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Danica-T/Cloth-Simulation" target="_blank" rel="noreferrer"><h2>Cloth Simulation</h2></a>
                <p>Developed a cloth simulation with detailed physics and environmental engines using JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Danica-T/Rasterizer" target="_blank" rel="noreferrer"><img src={raster} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Danica-T/Rasterizer" target="_blank" rel="noreferrer"><h2>Rasterizer</h2></a>
                <p>Implemented a rasterizer used to render 3D objects and textures in an efficient manner using JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Danica-T/Ray-Tracing" target="_blank" rel="noreferrer"><img src={ray} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Danica-T/Ray-Tracing" target="_blank" rel="noreferrer"><h2>Ray Tracing</h2></a>
                <p>Implemented a GLSL to preform ray tracing rendering of a 3D scene using JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Danica-T/Modeling" target="_blank" rel="noreferrer"><img src={modeling} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Danica-T/Modeling" target="_blank" rel="noreferrer"><h2>Modeling</h2></a>
                <p>implements a 3D Graphics Editor using JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Danica-T/Image-Processing" target="_blank" rel="noreferrer"><img src={imageedit} className="zoom" alt="cloth thumbnail" width="100%"/></a>
                <a href="https://github.com/Danica-T/Image-Processing" target="_blank" rel="noreferrer"><h2>Image Editor</h2></a>
                <p>This code implements a 2D image processor with a variety of filters and operations using JavaScript.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;