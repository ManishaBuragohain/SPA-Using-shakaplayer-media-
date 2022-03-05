import React from "react";
import { Grid } from '@material-ui/core';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
import { useState } from 'react';
function Hello() {
    const [show, setShow] = useState(true)
    return (
        <div className="task" >
            <h1>ASSIGNMENT</h1>
            {

                show ? <Grid container >

                    <Grid item md={3}>
                        <div class="card " >
                            {/* used images */}


                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">IMAGE</h5>
                                <img src="flower.jpg" class="card-img-top" />


                            </div>
                        </div>
                    </Grid>

                    <Grid item md={3}>
                        <div class="card ">
                            {/* used images */}


                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">TITLE</h5>
                                <h1 style={{
                                    fontSize: "1rem",
                                    fontFamily: "cursive",
                                    color: "black",
                                    fontSize: "large",
                                    background: "#FFE4E1",
                                    margin: "20px"


                                }}>“Take time to smell the roses.”</h1>



                            </div>
                        </div>



                    </Grid>
                    <Grid item md={3}>
                        <div class="card ">
                            {/* used description */}
                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">DESCRIPTION</h5>
                                <p class="card-text" style={{ background: "yellow" }} >A flower is the reproductive part of flowering plants. Flowers are also called the bloom or blossom of a plant. Flowers have petals. Inside the part of the flower that has petals are the parts which produce pollen and seeds. In all plants, a flower is usually its most colourful part.</p>

                            </div>
                        </div>





                    </Grid>
                    <Grid item md={3}>

                        <div class="card ">
                            {/* used  video tag */}
                            <div class="card-body" style={{ width: "300px", height: "270px" }}>
                                <h5 class="card-title">VIDEO</h5>
                                {/* used shakaplayer library */}
                                <ShakaPlayer autoPlay src="https://mazwai.com/videvo_files/video/free/2014-06/small_watermarked/phil_fried--marguerite_I_preview.webm" style={{ width: "280px", height: "150px" }} />;
                            </div>
                        </div>
                    </Grid>

                </Grid> : null
            }

            <div class="btn">

                <button onClick={() => setShow(true)}>show</button>
                <button onClick={() => setShow(false)}>Hide</button>
            </div>




        </div>

    )
}

export default Hello;