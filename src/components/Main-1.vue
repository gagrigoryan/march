<template>
    <div class="main py-5 px-2">
        <div class="container">
            <div class="row">
                <figure class="snip1515 col-md-4 my-5">
                    <div class="profile-image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg" alt="sample47" /></div>
                    <figcaption>
                        <h3>Fleece Marigold</h3>
                        <h4>Founder</h4>
                        <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
                        <a href="#" class="fancy-btn">Start</a>
                    </figcaption>
                </figure>
                <figure class="snip1515 col-md-4 my-5">
                    <div class="profile-image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample83.jpg" alt="sample83" /></div>
                    <figcaption>
                        <h3>Norman Gordon</h3>
                        <h4>Web Designer</h4>
                        <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
                    </figcaption>
                </figure>
                <figure class="snip1515 col-md-4 my-5">
                    <div class="profile-image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg" alt="sample70" /></div>
                    <figcaption>
                        <h3>Ruby Von Rails</h3>
                        <h4>Public Relations</h4>
                        <p>The only skills I have the patience to learn are those that application in life. </p>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style>
    @import url(https://fonts.googleapis.com/css?family=Open+sans);
    @import url(https://fonts.googleapis.com/css?family=Playfair+Display);
    .main {
        width: 100%;
        min-height: 100vh;
        background: linear-gradient(to right, #232526, #414345);
    }

    .snip1515 {
        font-family: 'Open Sans', Arial, sans-serif;
        //margin: 10px;
        width: 100%;
        color: #000000;
        text-align: center;
        line-height: 1.4em;
        font-size: 14px;
        box-shadow: none !important;
    }

    .snip1515 * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .snip1515 .profile-image {
        display: inline-block;
        width: 80%;
        z-index: 1;
        position: relative;
        padding: 10px;
        border: 2px solid #d5b59c;
    }

    .snip1515 .profile-image img {
        max-width: 100%;
        vertical-align: top;
    }

    .snip1515 figcaption {
        width: 100%;
        background-color: #F2F2F2;
        color: #555;
        padding: 125px 25px 25px;
        margin-top: -100px;
        display: inline-block;
    }

    .snip1515 h3,
    .snip1515 h4,
    .snip1515 p {
        margin: 0 0 5px;
    }

    .snip1515 h3 {
        font-weight: 600;
        font-size: 1.3em;
        font-family: 'Playfair Display', Arial, sans-serif;
    }

    .snip1515 h4 {
        color: #8c8c8c;
        font-weight: 400;
        letter-spacing: 2px;
    }

    .snip1515 p {
        font-size: 0.9em;
        letter-spacing: 1px;
        opacity: 0.9;
    }

    .snip1515 .icons {
        text-align: center;
        width: 100%;
    }

    .snip1515 i {
        padding: 10px 2px;
        display: inline-block;
        font-size: 18px;
        font-weight: normal;
        color: #d5b59c;
        opacity: 1;
    }

    .snip1515 i:hover {
        opacity: 1;
        -webkit-transition: all 0.35s ease;
        transition: all 0.35s ease;
    }

    .fancy-btn{
        display:inline-block;
        position:relative;
        padding:10px 20px;
        border:2px solid #d5b59c;
        color: #d5b59c;
        font-family:'Dancing Script',serif;
        font-style:italic;
        font-size:30px;
        text-decoration:none;
        margin:20px auto;
        transition: color 0.4s
    }
    .fancy-btn:after{
        content:" ";
        border:2px solid rgba(0,0,0,0);
        display:inline-block;
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        transition:all 0.4s;
    }
    .fancy-btn:hover{
        color: #d5b59c;
        text-decoration: none;
    }
    .fancy-btn:hover:after{
        border:2px solid #d5b59c;
        width: calc(100% - 10px);
        height: calc(100% + 10px);
    }

</style>