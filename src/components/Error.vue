<template>
    <div class="main">
        <div class="container">
            <div class="ghost">
                <div class="ghost-body">
                    <i class="ghost-eyes">
                        <div>
                            <span></span>
                            <span></span>
                        </div>
                    </i>
                </div>
            </div>
            <div class="sologen-container">
                <p class="error-code">404 </p>
                <h2>Page not found :(</h2>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'error',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="css" scoped>

.main {
    background: #d5dde1;
    height: 100%;
}
.container {
    display: flex;
    margin: 0 auto;
    padding: 100px;
    justify-content: center;
   
}
.sologen-container h2 {
    margin: 0;
    text-align: left;
    font-size: 28px;
    margin-top: -10px;
    color: white;
}
.error-code {
    color: white;
    font-size: 300px;
    font-weight: 500;
    margin: 0;
}
.error-code span {
    font-size: 20px;
    margin-left: -10px;
    
}
.ghost {
    width: 105px;
    margin: 240px 60px 0 0;
}  
.ghost::after {
    content: " ";
    display: block;
    height: 15px;
    border-radius: 50%;
    margin-top: 20px;
    background: rgba(0,0,0,.1);
    animation: shadow-fade 3s alternate infinite ease-in-out;
}
.ghost-body {
    height: 90px;
    padding-top: 35px;
    background: #fff;
    position: relative;
    border-radius: 70px 70px 0 0;
    text-align: center;
    animation: ghost-float 3s alternate infinite ease-in-out;
}
.ghost-body::after {
    content: " ";
    display: block;
    width: 100%;
    height: 10px;
    position: absolute;
    bottom: -9px;
    background-position: center top;
    background-repeat: repeat-x;
    background-image: url(../assets/images/ghost_foot.png);
}
.ghost-eyes {
    color: #454e57;
    display: inline-block;
    animation: ghost-blink 4s infinite ease;
    position: relative;
    transition: all .1s ease;
    vertical-align: middle;
    text-align: center;
    margin-left: 15px;
}
.ghost-eyes span {
    content: "";
    /* font-family: icons;  */
    height: 18px;
    width: 18px;
    background-color: #454e57;
    display: block;
    border-radius: 50%;
    margin: 0 2px;
    float: right;
}
@keyframes shadow-fade {
    from {
        opacity: 1
    }

    to {
        opacity: .3
    }
}
@keyframes ghost-float {
    from {
        transform: translateY(0)
    }

    to {
        transform: translateY(-15px)
    }
}

@keyframes ghost-blink {
    0% {
        transform: scale(1,0)
    }

    5% {
        transform: scale(1,1)
    }

    100% {
        transform: scale(1,1)
    }
}
</style>