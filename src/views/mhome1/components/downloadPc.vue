<template>
    <div class="bg-info">
        <span class="font1">CellWallet</span>
        <span class="font">{{$t('celldetailtop.title')}}</span>
        <span class="fontinfo">CellWallet 1.0 Ethereum</span>
        <el-row class="btn">
            <el-button type="primary" @click="iosShow">
                <img class="img1" src="../../../assets/cellmhome1/iphone (1).svg" alt="">
                <span>IOS</span>
            </el-button>
            <div class="google">
                <div class="google-play" @click="googleShow">
                    <img src="../../../assets/cellmhome1/icon_google play_pc.png" alt="">
                </div>
                <el-button class="google-play-re" type="primary">
                    <a href="https://api.cellnetwork.io/android/last_package" style="color: #fff">
                        <img class="img2" src="../../../assets/cellmhome1/android.svg" alt="">
                        <span>Downdoad</span>
                    </a>
                </el-button>
            </div>
            <!-- <el-popover
                placement="right-end"
                popper-class="poper1"
                trigger="click"> -->
            <div class="code-pa">
                <img src="../../../assets/cellmhome1/icon_code.png" alt="" class="code-image">
                <div class="wx-pa">
                    <img src="../../../assets/cellmhome1/wx_detail.png" alt="" class="wx_detail">
                    <span>扫描二维码下载</span>
                </div>
            </div>
            <!-- </el-popover> -->
        </el-row>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {

    },
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        googleShow() {
            window.open('https://play.google.com/store/apps/details?id=ning.cell&hl=zh-CN','_blank');
        },
        iosShow() {
            window.open('https://apps.apple.com/us/app/cell-wallet/id1492856822','_blank');
        },
    }
}
</script>

<style lang="scss">
    .bg-info {
        position: absolute;
        left: 10%;
        top: 240px;
        width: 50%;
        height: 110px;
        z-index: 12;
        color: #ffffff;
        .bg-info-logo {
            display: block;
            margin: 0 auto;
            width: 200px;
            height: 150px;
        }
        .font1 {
            font-size: 44px;
        }
        .font {
            display: block;
            font-size: 32px;
            font-family: PingFangSC-Ultralight;
            padding: 20px 0 10px;
        }
        .fontinfo {
            text-align: left;
            font-size: 14px;
            font-family: 'PingFangSC-Ultralight';
        }
        .btn {
            display: flex;
            padding-top: 50px;
            .el-button {
                width: 130px;
                height: 50px;
                margin: 0 5px;
                span {
                    display: flex;
                    align-items: center;
                    margin-top: 2px;
                }
            }
            img {
                float: left;
                width: 18px;
                height: 18px;
            }
            .img1 {
                margin: 0 5px 0 23px;
            }
            .google {
                position: relative;
                height: 120px;
            }
            .google-play {
                display: flex;
                align-items: center;
                width: 130px;
                height: 50px;
                margin: 0 5px;
                background-color: #ffffff;
                border-radius: 4px;
                cursor: pointer;
                img {
                    width: 90px;
                    height: 26px;
                    margin: 0 auto;
                }
            }
            .google-play-re {
                display: none;
                position: absolute;
                left: 0px;
                bottom: 10px;
            }
            .google:hover .google-play-re {
                display: block;
            }
            .code-pa {
                position: relative;
                width: 50px;
                height: 50px;
                margin-left: 5px;
                cursor: pointer;
                .code-image {
                    position: absolute;
                    left: 0;
                    top: 0;
                    display: block;
                    width: 50px;
                    height: 50px;
                    z-index: 9;
                }
                .wx-pa {
                    display: none;
                    align-items: center;
                    position: absolute;
                    left: 0;
                    width: 180px;
                    height: 200px;
                    background-color: #ffffff;
                    border-radius: 8px;
                    z-index: 10;
                    .wx_detail {
                        width: 140px;
                        height: 140px;
                        margin: 20px 20px 10px 20px;
                    }
                    span {
                        display: block;
                        width: 100%;
                        text-align: center;
                        color: #000;
                    }
                }
            }
            .code-pa:hover .wx-pa {
                display: block;
                z-index: 10;
            }
        }
        .font2 {
            font-size: 16px;
            margin-top: 50px;
        }
    }
</style>
