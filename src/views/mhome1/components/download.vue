<template>
    <div class="bg-info-download">
        <span class="font1">CellWallet</span>
        <span class="font">{{$t('celldetailtop.title')}}</span>
        <span class="fontinfo">CellWallet 1.0 Ethereum</span>
        <div class="btn" v-if="isshow">
            <a href="https://apps.apple.com/us/app/cell-wallet/id1492856822" class="ios-play">
                <van-button type="info"><img class="img1" src="../../../assets/cellmhome1/iphone (1).svg" alt="">IOS</van-button>
            </a>
        </div>
        <div class="btn" v-if="!isshow">
            <a href="https://play.google.com/store/apps/details?id=ning.cell&hl=zh-CN">
                <div class="google-play"><img src="../../../assets/cellmhome1/icon_google play.png" alt=""></div>
            </a>
            <a href="https://api.cellnetwork.io/android/last_package">
                <van-button type="default" class="btn2">
                    <img class="img2" src="../../../assets/cellmhome1/wallet_icon_android.png" alt="">Download
                </van-button>
            </a>
        </div>
    </div>
</template>

<script>
import { commongxw } from '@/utils/chengxw.js'
export default {
    components: {

    },
    props: {

    },
    data() {
        return {
            isshow: false
        }
    },
    created() {
        let isAndroid = commongxw.checkTypeAppSystem();
        if (isAndroid) {
            this.isshow = false
        } else {
            this.isshow = true
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss">
    @import '@/common/scss/commonsize.scss';
    .bg-info-download {
        position: absolute;
        left: 10%;
        top: 120px;
        width: 80%;
        height: 300px;
        z-index: 11;
        color: #ffffff;
        .bg-info-logo {
            display: block;
            width: rem(278);
            height: rem(200);
            margin: 0 auto;
        }
        .font1 {
            font-size: 44px;
            text-align: center;
        }
        .font {
            display: block;
            font-size: 32px;
            text-align: center;
            font-family: PingFangSC-Ultralight;
            padding: 20px 0 10px;
        }
        .fontinfo {
            text-align: center;
            font-size: rem(24);
            font-family: PingFangSC-Ultralight;
        }
        .btn {
            display: flex;
            justify-content: space-evenly;
            padding-top: 50px;
            text-align: center;
            .van-button {
                width: 40%;
                .van-button__text {
                    display: flex;
                    align-items: center;
                }
            }
            .btn2 {
                width: 100%;
            }
            img {
                display: block;
                width: rem(40);
                height: rem(40);
            }
            .img1 {
                margin: 0 rem(10) 0 rem(38);
            }
            .img2 {
                margin: 0 rem(10) 0 0;
            }
            .ios-play {
                width: 100%;
            }
            .google-play {
                display: flex;
                width: 100%;
                height: 100%;
                padding: 0 15px;
                box-sizing: border-box;
                background-color: #1c8dea;
                border-radius: 2px;
                img {
                    display: block;
                    width: rem(180);
                    height: rem(54);
                    margin: rem(18) auto 0;
                }
            }
        }
    }
</style>
