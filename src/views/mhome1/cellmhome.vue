<template>
    <div class="cell-mhome1">
        <div class="bg-content" ref="top1">
            <div class="bg-content-outer">
                <img class="bg" src="../../assets/cellmhome1/wallet_img_1.png" alt="">
                <div class="fix" :class="{'active': active}">
                    <div class="header">
                        <div class="logo">
                            <img class="logo-pc" src="../../assets/cellmhome/logo_06.png" alt="">
                        </div>
                    </div>
                    <div class="menu">
                        <van-popup
                        v-model="show"
                        position="right"
                        :style="{ height: '100%' }"
                        >
                        <div class="nav">
                            <span @click="handleIndex">{{$t('blockchainTop.nav1')}}</span>
                            <!-- <span @click="handleTechnology">{{$t('blockchainTop.navm5')}}</span>
                            <span @click="handleEcological">{{$t('blockchainTop.navm6')}}</span>
                            <span @click="handleAbout">{{$t('blockchainTop.navm7')}}</span>
                            <span @click="handleTeam">{{$t('blockchainPartners.title')}}</span> -->
                            <span @click="handlePledge">{{$t('blockchainTop.nav5')}}</span>
                            <span @click="toggleLang('zh_CN')" :disabled="$i18n.locale == 'zh_CN'">中文简体</span>
                            <span @click="toggleLang('zh_TW')" :disabled="$i18n.locale == 'zh_TW'">中文繁体</span>
                            <span @click="toggleLang('en_US')" :disabled="$i18n.locale == 'en_US'">English</span>
                        </div>
                        </van-popup>
                        <img @click="handleMenu" src="../../assets/m/menu.png" alt="">
                    </div>
                </div>
                <div class="bg-info">
                    <span class="font1">CellWallet</span>
                    <span class="font">{{$t('celldetailtop.title')}}</span>
                    <span class="fontinfo">CellWallet 1.0 Ethereum</span>
                    <div class="btn">
                        <van-button type="info"><img class="img1" src="../../assets/cellmhome1/wallet_icon_iphone.png" alt="">IOS</van-button>
                        <!-- <a href="market://details?id=com.meetings&target=market&from=met"> -->
                            <van-button type="default"><img class="img2" src="../../assets/cellmhome1/wallet_icon_android.png" alt="">Android</van-button>
                        <!-- </a> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="mokuai">
            <div class="lar">{{$t('mokuai1.title')}}</div>
            <div class="mid">{{$t('mokuai1.content')}}</div>
            <img src="../../assets/cellmhome1/wallet_icon_10.png" alt="">
        </div>
        <div class="mokuai bg">
            <div class="lar">{{$t('mokuai2.title')}}</div>
            <div class="mid">{{$t('mokuai2.content')}}</div>
            <img src="../../assets/cellmhome1/wallet_icon_13.png" alt="">
        </div>
        <div class="mokuai">
            <div class="lar">{{$t('mokuai3.title')}}</div>
            <div class="mid">{{$t('mokuai3.content')}}</div>
            <img src="../../assets/cellmhome1/wallet_icon_15.png" alt="">
        </div>
        <div class="mokuai bg">
            <div class="lar">{{$t('mokuai4.title')}}</div>
            <div class="mid">{{$t('mokuai4.content')}}</div>
            <img src="../../assets/cellmhome1/wallet_icon_17.png" alt="">
        </div>
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
            lang: 'zh_CN',
            active: false,
            show: false,
            keyanimate: false,
            teamView: false,
        }
    },
    created() {

    },
    mounted() {
        let lang = localStorage.getItem('locale')
        this.lang = lang
        window.addEventListener('scroll', this.watchScroll)
    },
    computed: {
        teams() {
            return [
                {img: require('../../assets/peo_1.png'), name: this.$t('blockchainTeam.name1'), title: this.$t('blockchainTeam.title1'), info: this.$t('blockchainTeam.info1')},
                {img: require('../../assets/peo_2.png'), name: this.$t('blockchainTeam.name2'), title: this.$t('blockchainTeam.title2'), info: this.$t('blockchainTeam.info2')},
                {img: require('../../assets/peo_3.png'), name: this.$t('blockchainTeam.name3'), title: this.$t('blockchainTeam.title3'), info: this.$t('blockchainTeam.info3')},
                {img: require('../../assets/peo_4.png'), name: this.$t('blockchainTeam.name4'), title: this.$t('blockchainTeam.title4'), info: this.$t('blockchainTeam.info4')},
                {img: require('../../assets/peo_5.png'), name: this.$t('blockchainTeam.name5'), title: this.$t('blockchainTeam.title5'), info: this.$t('blockchainTeam.info5')}
            ]
        }
    },
    methods: {
        watchScroll() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop > 800) {
                this.keyanimate = true
                this.active = true
            }
            scrollTop > 800 ? this.active = true : this.active = false
            if(scrollTop > 2000) {
                this.teamView = true
            }
        },
        handleMenu() {
            this.show = true
            this.keyanimate = true
        },
        handleIndex() {
            // document.body.scrollTop = 0
            // document.documentElement.scrollTop = 0
            // this.show = false
            this.$router.push({path: './mhome'})
        },
        handleProject() {
            document.body.scrollTop = this.$refs.top1.clientHeight - 50;
            document.documentElement.scrollTop = this.$refs.top1.clientHeight - 50;
            this.show = false
        },
        handleTechnology() {
            document.body.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight - 50)
            document.documentElement.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight - 50)
            this.show = false
        },
        handleEcological() {
            document.body.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight  + this.$refs.top4.clientHeight - 50)
            document.documentElement.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight + this.$refs.top4.clientHeight - 50)
            this.show = false
        },
        handleAbout() {
            document.body.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight + this.$refs.top4.clientHeight + this.$refs.top5.clientHeight - 50)
            document.documentElement.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight + this.$refs.top4.clientHeight + this.$refs.top5.clientHeight - 50)
            this.show = false
        },
        handleTeam() {
            document.body.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight + this.$refs.top4.clientHeight + this.$refs.top5.clientHeight + this.$refs.top6.clientHeight - 50)
            document.documentElement.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight + this.$refs.top4.clientHeight + this.$refs.top5.clientHeight + this.$refs.top6.clientHeight -50)
            this.show = false
        },
        handlePledge() {
            window.location.href = 'https://cellcoin.in/#/u/0x5Ab174f779Df6c23A4d3574E01C627b04f340aBb'
        },
        toggleLang(lang) {
            this.lang = lang
            if(lang == 'zh_CN') {
                localStorage.setItem('locale', 'zh_CN')
                this.$i18n.locale = localStorage.getItem('locale')
                this.$message({
                    message: '切换为中文简体！',
                    type: 'success'
                })
            } else if (lang == 'en_US') {
                localStorage.setItem('locale', 'en_US')
                this.$i18n.locale = localStorage.getItem('locale')
                this.$message({
                    message: 'Switch to English!',
                    type: 'success'
                })
            } else if(lang == 'zh_TW') {
                localStorage.setItem('locale', 'zh_TW')
                this.$i18n.locale = localStorage.getItem('locale')
                this.$message({
                    message: '切换为中文繁体!',
                    type: 'success'
                })
            }
            this.show = false
        },
    }
}
</script>

<style lang="scss">
    @import '@/common/scss/commonsize.scss';
    .cell-mhome1 {
        .bg-content {
            height: calc(100vh);
            .bg-content-outer {
                position: relative;
                height: 100%;
                .bg {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: calc(100vh);
                    z-index: 10;
                }
                .fix {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 50px;
                    z-index: 12;
                    .header {
                        position: absolute;
                        top: 0;
                        left: 10%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 80%;
                        height: 50px;
                        margin: 0 auto;
                        z-index: 12;
                        .logo {
                            display: flex;
                            align-items: center;
                            margin-top: rem(10);
                            .logo-pc {
                                width: rem(300);
                                height: rem(66);
                                margin-right: rem(15);
                            }
                        }
                    }
                    .menu {
                        position: fixed;
                        top: 0;
                        right: 5%;
                        display: flex;
                        align-items: center;
                        height: 50px;
                        z-index: 12;
                        cursor: pointer;
                        img {
                            display: block;
                            width: rem(54);
                            height: rem(54);
                        }
                        .nav {
                            height: 100%;
                            background-color: #ffffff;
                            span {
                                display: block;
                                padding: rem(30) rem(160) rem(30) rem(40);
                                cursor: pointer;
                                font-size: rem(28);
                            }
                        }
                    }
                }
                .active {
                    background: rgba(20, 35, 57, 1);
                }
                .bg-info {
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
                    }
                    .btn {
                        padding-top: 50px;
                        text-align: center;
                        .van-button {
                            width: 40%;
                            margin: 0 8px;
                            .van-button__text {
                                display: flex;
                                align-items: center;
                            }
                        }
                        img {
                            display: block;
                            width: rem(25);
                            height: rem(25);
                        }
                        .img1 {
                            margin: 0 rem(10) 0 rem(50);
                        }
                        .img2 {
                            margin: 0 rem(10) 0 rem(20);
                        }
                    }
                    .center {
                        display: flex;
                        .center1 {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: rem(16);
                            height: rem(74);
                            text-align: center;
                            background-size: 100% 100%;
                            img {
                                display: block;
                                margin-right: rem(8);
                            }
                            span {
                                font-size: rem(22);
                            }
                        }
                        .center1:nth-child(1) {
                            width: 26.9%;
                            background: url('../../assets/cellmhome/icon_home_dia2.png') 0 0 no-repeat;
                            background-size: 100% 100%;
                            img {
                                width: rem(20);
                                height: rem(22);
                            }
                        }
                        .center1:nth-child(2) {
                            width: 36.4%;
                            background: url('../../assets/cellmhome/icon_home_dia3.png') 0 0 no-repeat;
                            background-size: 100% 100%;
                            img {
                                width: rem(25);
                                height: rem(21);
                            }
                        }
                        .center1:nth-child(3) {
                            width: 35.8%;
                            background: url('../../assets/cellmhome/icon_home_dia4.png') 0 0 no-repeat;
                            background-size: 100% 100%;
                            img {
                                width: rem(25);
                                height: rem(22);
                            }
                        }
                    }
                }
                .space {
                    overflow: hidden;
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 11;
                }
                .crater1 {
                    width: 20px;
                    height: 20px;
                    left: 25%;
                    top: 20%;
                }
                .crater2 {
                    width: 10px;
                    height: 10px;
                    left: 50%;
                    top: 60%;
                }
                .crater3 {
                    width: 15px;
                    height: 15px;
                    left: 30%;
                    top: 65%;
                }
                .crater4 {
                    width: 15px;
                    height: 15px;
                    left: 60%;
                    top: 35%;
                }
                .stars {
                    overflow: hidden;
                    width: 100%;
                    height: 100%;
                }
                .star {
                    display: block;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: #FFF;
                    top: 100px;
                    left: 85%;
                    position: relative;
                    transform-origin: 100% 0;
                    animation: star-ani 6s infinite ease-out;
                    // box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
                    opacity: 0;
                    z-index: 2;
                }
                .star:after {
                    content: '';
                    display: block;
                    top: 0px;
                    left: 4px;
                    border: 0px solid #fff;
                    border-width: 0px 90px 2px 90px;
                    border-color: transparent transparent transparent rgba(255, 255, 255, .3);
                    transform: rotate(-45deg) translate3d(1px, 3px, 0);
                    box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
                    transform-origin: 0% 100%;
                    animation: shooting-ani 3s infinite ease-out;
                }
                .pink {
                    top: 30px;
                    left: 20%;
                    background: #FFF;
                    animation-delay: 5s;
                    -webkit-animation-delay: 5s;
                    -moz-animation-delay: 5s;
                }
                .pink:after {
                    border-color: transparent transparent transparent #FFF;
                    animation-delay: 5s;
                    -webkit-animation-delay: 5s;
                    -moz-animation-delay: 5s;
                }
                .blue {
                    top: 35px;
                    left: 60%;
                    background: #FFF;
                    animation-delay: 7s;
                    -webkit-animation-delay: 7s;
                    -moz-animation-delay: 7s;
                }
                .blue:after {
                    border-color: transparent;
                    animation-delay: 12s;
                    -webkit-animation-delay: 7s;
                    -moz-animation-delay: 7s;
                    animation-delay: 7s;
                }
                .yellow {
                    top: 50px;
                    left: 50%;
                    background: #FFF;
                    animation-delay: 5.8s;
                }
                .yellow:after {
                    border-color: transparent transparent transparent #FFF;
                    animation-delay: 5.8s;
                }
                @keyframes star-ani {
                    0% {
                        opacity: 0;
                        transform: scale(0) rotate(0) translate3d(0, 0, 0);
                        -webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
                        -moz-transform: scale(0) rotate(0) translate3d(0, 0, 0);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
                        -webkit-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
                        -moz-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
                    }
                    100% {
                        opacity: 0;
                        transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
                        -webkit-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
                        -moz-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
                    }
                }
            }
        }
        .mokuai {
            padding: rem(140) rem(32) rem(80);
            .lar {
                font-size: 30px;
                color: #333333;
                font-family: PingFangSC-Light;
            }
            .mid {
                font-size: 14px;
                color: #6c7074;
                font-family: PingFangSC-Thin;
                line-height: rem(90);
            }
            img {
                width: 60%;
                height: rem(376);
                margin: rem(112) auto 0;
            }
        }
        .bg {
            background-color: #fafbfb;
        }
        .pro {
            position: relative;
            background-color: #0f2239;
            .pro-info {
                box-sizing: border-box;
                height: 100%;
                padding: 0 5%;
                .info-top {
                    display: flex;
                    h1 {
                        padding-top: rem(89);
                        font-size: rem(48);
                        color: #e8eef3;
                    }
                    .pro-bg1 {
                        width: rem(265);
                        height: rem(210);
                    }
                }
                .info {
                    position: absolute;
                    top: 220px;
                    left: 2%;
                    display: flex;
                    width: 90%;
                }
                .info-right {
                    padding-top: 10%;
                    font-size: rem(24);
                    line-height: rem(36);
                    color: #e8eef3;
                }
                .info-left {
                    width: 100%;
                    height: rem(530);
                    margin-top: rem(100);
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .technology {
            background-color: #ffffff;
            h1 {
                padding: rem(92) 0 rem(110);
                text-align: center;
                font-size: rem(48);
                color: #000000;
            }
            .wallet-item {
                overflow: hidden;
                box-sizing: border-box;
                width: 100%;
                padding: 0 3% 6%;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                // justify-content: space-around;
                @keyframes rightEaseInAnimate1{
                    0%{transform: translateX(-500px);opacity: 0;}
                    100%{transform:translateX(0px);opacity: 1; }
                }
                @keyframes rightEaseInAnimate2{
                    0%{transform: translateX(500px);opacity: 0;}
                    100%{transform:translateX(0px);opacity: 1; }
                }
                .item {
                    width: 50%;
                    padding-bottom: rem(60);
                    border-radius: 10px;
                    transform: translateX(-500px);
                    img {
                        display: block;
                        width: rem(126);
                        height: rem(129);
                        margin: rem(25) auto;
                    }
                    span {
                        display: block;
                        text-align: center;
                        width: 90%;
                        margin: 0 auto;
                        color: #000000;
                        font-size: rem(30);
                        padding-bottom: rem(10);
                    }
                    p {
                        width: 80%;
                        margin: 0 auto;
                        text-align: center;
                        color: #7a7b7c;
                        font-size: rem(20);
                    }
                }
                .keyanimate1 {
                    animation: rightEaseInAnimate1 1s ease 1;
                    animation-fill-mode: forwards;
                }
                .keyanimate2 {
                    animation: rightEaseInAnimate2 1s ease 1;
                    animation-fill-mode: forwards;
                }
                .keyanimate3 {
                    animation: rightEaseInAnimate1 2s ease 1;
                    animation-fill-mode: forwards;
                }
                .keyanimate4 {
                    animation: rightEaseInAnimate2 2s ease 1;
                    animation-fill-mode: forwards;
                }
                .item:hover {
                    background-color: #1c8dea;
                    cursor: pointer;
                    span,p {
                        color: #ffffff;
                    }
                }
            }
        }
        .eco {
            overflow: hidden;
            img {
                width: 100%;
            }
        }
        .ecological {
            width: 100%;
            padding-bottom: rem(200);
            background-color: #10223a;
            h1 {
                padding-top: rem(92);
                text-align: center;
                font-size: rem(48);
                color: #ffffff;
                margin-bottom: -20px;
            }
            .bg {
                width: 68%;
                height: rem(750);
                margin: 0 auto;
                background: url('../../assets/cellmhome/pic_bg_yin.png') 0 0 no-repeat;
                background-size: 100% 100%;
                .bg-position {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    div {
                        width: rem(103);
                        height: rem(103);
                        line-height: rem(250);
                        color: #ffffff;
                    }
                    .position1 {
                        position: absolute;
                        left: rem(-50);
                        top: rem(489);
                        background: url('../../assets/cellmhome/icon_jinr.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                        // animation:
                        //     animX 2s  cubic-bezier(0.36, 0, 0.64, 1) -1s infinite alternate,
                        //     animY 2s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
                            // scale 4s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
                    }
                    @keyframes animX{
                        0% {left: -50px;}
                        100% {left: 80%;}
                    }
                    @keyframes animY{
                        0% {top: 0px;}
                        100% {top: 40%;}
                    }
                    // @keyframes scale {

                    //     0% {
                    //         transform: scale(0.7)
                    //     }
                    //     50% {
                    //         transform: scale(1)
                    //     }
                    //     100% {
                    //         transform: scale(0.7)
                    //     }
                    // }
                    // .position1:hover {
                    //     background: url('../../assets/cellhome/icon_jinrong_s.png') 0 0 no-repeat;
                    // }
                    .position2 {
                        position: absolute;
                        left: rem(40);
                        top: rem(300);
                        background: url('../../assets/cellmhome/icon_shequ.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    // .position2:hover {
                    //     background: url('../../assets/cellhome/icon_shequ_s.png') 0 0 no-repeat;
                    // }
                    .position3 {
                        position: absolute;
                        right: rem(20);
                        top: rem(162);
                        background: url('../../assets/cellmhome/icon_xinren.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    // .position3:hover {
                    //     background: url('../../assets/cellhome/icon_xinren_s.png') 0 0 no-repeat;
                    // }
                    .position4 {
                        position: absolute;
                        right: rem(-30);
                        top: rem(352);
                        background: url('../../assets/cellmhome/icon_gongying.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    // .position4:hover {
                    //     background: url('../../assets/cellhome/icon_gongying_s.png') 0 0 no-repeat;
                    // }
                    .position5 {
                        position: absolute;
                        right: rem(16);
                        bottom: rem(120);
                        background: url('../../assets/cellmhome/icon_shuju.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    // .position5:hover {
                    //     background: url('../../assets/cellhome/icon_shuju_s.png') 0 0 no-repeat;
                    // }
                    .position6 {
                        position: absolute;
                        left: rem(130);
                        bottom: rem(-40);
                        background: url('../../assets/cellmhome/icon_diya.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    // .position6:hover {
                    //     background: url('../../assets/cellhome/icon_diya_s.png') 0 0 no-repeat;
                    // }
                    .position7 {
                        position: absolute;
                        left: rem(200);
                        top: rem(170);
                        background: url('../../assets/cellhome/icon_game_d.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    .position8 {
                        position: absolute;
                        right: rem(133);
                        top: rem(654);
                        background: url('../../assets/cellhome/icon_yiliao_d.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    .position9 {
                        position: absolute;
                        left: rem(-10);
                        bottom: rem(-34);
                        background: url('../../assets/cellhome/icon_jiaoyu_d.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                }
            }
        }
        .rescenter {
            h1 {
                padding: rem(50) 0 rem(80);
                text-align: center;
                font-size: rem(48);
                color: #000000;
            }
            .rescenter-center {
                overflow: hidden;
                img {
                    display: block;
                    width: 100%;
                }
                .img2 {
                    position: relative;
                    p {
                        position: absolute;
                        bottom: 75px;
                        width: 82%;
                        left: 9%;
                        font-size: 1.2rem;
                        line-height: 2.2rem;
                    }
                }
            }
        }
        .partners {
            h1 {
                padding: rem(50) 0 rem(40);
                text-align: center;
                font-size: rem(48);
                color: #000000;
                background-color: #f9f9f9;
            }
            img {
                width: 100%;
            }
        }
        .about {
            padding-bottom: rem(50);
            background: url('../../assets/cellmhome/pic_bg_aboutus.png') 0 0 no-repeat;
            background-size: 100% 100%;
            color: #ffffff;
            h1 {
                padding: rem(100) 0 rem(50);
                text-align: center;
                font-size: rem(44);
            }
            .about-us {
                box-sizing: border-box;
                width: 80%;
                padding: rem(35) 0;
                margin: 0 auto;
                p {
                    margin-bottom: rem(30);
                }
            }
        }
        .team {
            h1 {
                padding: rem(60) 0;
                text-align: center;
                font-size: 20px;
            }
            .item-outer {
                width: 100%;
                padding-bottom: rem(20);
                margin: 0 auto;
                @keyframes fade-in {
                    0% {opacity: 0;}
                    40% {opacity: 0;}
                    100% {opacity: 1;}
                }
                .item-inner {
                    display: flex;
                    justify-content: space-between;
                    width: 92%;
                    margin: 0 auto rem(20);
                    opacity: 0;
                    img {
                        display: block;
                        width: 26%;
                        height: 100%;
                    }
                    .team-info {
                        box-sizing: border-box;
                        padding: 0 rem(30) rem(30);
                        width: 100%;
                        background-color: #f0f1f2;
                        .info-title {
                            display: flex;
                            align-items: center;
                            padding: rem(40) 0 rem(30);
                            color: #333;
                            span:nth-child(1) {
                                font-size: rem(30);
                                margin-right: rem(20);
                            }
                        }
                    }
                }
                .team-view:nth-child(1) {
                    animation: fade-in;
                    animation-duration: 2s;
                    animation-fill-mode: forwards;
                }
                .team-view:nth-child(2) {
                    animation: fade-in;
                    animation-duration: 2.5s;
                    animation-fill-mode: forwards;
                }
                .team-view:nth-child(3) {
                    animation: fade-in;
                    animation-duration: 3s;
                    animation-fill-mode: forwards;
                }
                .team-view:nth-child(4) {
                    animation: fade-in;
                    animation-duration: 3.5s;
                    animation-fill-mode: forwards;
                }
                .team-view:nth-child(5) {
                    animation: fade-in;
                    animation-duration: 4s;
                    animation-fill-mode: forwards;
                }
            }
        }
        .copyright {
            color: #ffffff;
            background-color: #10223a;
            .copyright-outer {
                display: flex;
                justify-content: space-around;
                padding: rem(20) 0 rem(40) rem(40);
                .copyright-inner {
                    flex: 1;
                    h2 {
                        font-size: rem(18);
                        padding: rem(20) 0;
                    }
                    .item {
                        font-size: rem(12);
                        color: #b3b5b9;
                        span {
                            display: block;
                            padding: rem(5) 0;
                        }
                        .phone, .position {
                            display: flex;
                            align-items: center;
                            img {
                                display: block;
                                width: rem(20);
                                height: rem(20);
                                margin-right: rem(4);
                            }
                        }
                    }
                }
            }
            .footer {
                line-height: rem(40);
                text-align: center;
                color: #b3b5b9;
            }
        }
    }
</style>
