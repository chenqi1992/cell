<template>
    <div class="cell-home">
        <div class="bg-content" ref="top1">
            <div class="bg-content-outer">
                <div class="header">
                    <div class="logo">
                        <img class="logo-pc" src="../../assets/cellhome/logo_06.png" alt="">
                    </div>
                    <div class="nav">
                        <span @click="handleIndex">{{$t('blockchainTop.nav1')}}</span>
                        <span @click="handleProject">{{$t('blockchainTop.navm5')}}</span>
                        <span @click="handleAbout">{{$t('blockchainTop.navm6')}}</span>
                        <span @click="handleTeam">{{$t('blockchainTop.navm7')}}</span>
                        <!-- <span @click="handleTeam">{{$t('blockchainTop.navm8')}}</span> -->
                        <span @click="handlePledge">{{$t('blockchainTop.nav5')}}</span>
                    </div>
                   <el-dropdown>
                        <!-- <span class="el-dropdown-link">
                            {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="toggleLang('zh_CN')" :disabled="$i18n.locale == 'zh_CN'">中文简体</el-dropdown-item>
                            <el-dropdown-item @click.native="toggleLang('zh_TW')" :disabled="$i18n.locale == 'zh_TW'">中文繁体</el-dropdown-item>
                            <el-dropdown-item @click.native="toggleLang('en_US')" :disabled="$i18n.locale == 'en_US'">English</el-dropdown-item>
                        </el-dropdown-menu> -->
                    </el-dropdown>
                </div>
                <div class="bg-info">
                    <img class="bg-info-logo" src="../../assets/cellhome/logo.png" alt="">
                    <span class="font">{{$t('blockchainTop.title')}}</span>
                    <span class="fontinfo">{{$t('blockchainTop.titleInfo')}}</span>
                    <!-- <div class="center">
                        <div class="center1">
                            <img src="../../assets/cellhome/icon_wallet.png" alt="">
                            <span>{{$t('blockchainTop.type3')}}</span>
                        </div>
                        <div class="center1">
                            <img src="../../assets/cellhome/icon_exc.png" alt="">
                            <span>{{$t('blockchainTop.type2')}}</span>
                        </div>
                        <div class="center1">
                            <img src="../../assets/cellhome/icon_staking.png" alt="">
                            <span>{{$t('blockchainTop.type1')}}</span>
                        </div>
                    </div> -->
                </div>
                <div class="space">
                    <div class="stars">
                        <div class="star"></div>
                        <div class="star pink"></div>
                        <div class="star blue"></div>
                        <div class="star yellow"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pro" ref="top2">
            <div class="pro-info">
                <h1>{{$t('blockchainPro.title')}}</h1>
                <img class="pro-bg1" src="../../assets/cellhome/pic_sucai.png" alt="">
                <div class="info">
                    <div class="info-left"><img src="../../assets/cellhome/pic_cellnetwork.png" alt=""></div>
                    <div class="info-right">{{$t('blockchainPro.info')}}</div>
                </div>
            </div>
        </div>
        <div class="technology" ref="top3">
            <h1>{{$t('blockchainTec.title')}}</h1>
            <div class="wallet-item">
                <div class="item">
                    <img src="../../assets/cellhome/icon_zhinengheyue.png" alt="">
                    <span>{{$t('blockchainTec.item1')}}</span>
                    <p>{{$t('blockchainTec.item1Info')}}</p>
                </div>
                <div class="item">
                    <img src="../../assets/cellhome/icon_gongshijizhi.png" alt="">
                    <span>{{$t('blockchainTec.item2')}}</span>
                    <p>{{$t('blockchainTec.item2Info')}}</p>
                </div>
                <div class="item">
                    <img src="../../assets/cellhome/icon_shandui.png" alt="">
                    <span>{{$t('blockchainTec.item3')}}</span>
                    <p>{{$t('blockchainTec.item3Info')}}</p>
                </div>
                <div class="item">
                    <img src="../../assets/cellhome/icon_kualiamjishu.png" alt="">
                    <span>{{$t('blockchainTec.item4')}}</span>
                    <p>{{$t('blockchainTec.item4Info')}}</p>
                </div>
                <div class="item">
                    <img src="../../assets/cellhome/icon_yuyanji.png" alt="">
                    <span>{{$t('blockchainTec.item5')}}</span>
                    <p>{{$t('blockchainTec.item5Info')}}</p>
                </div>
            </div>
        </div>
        <div class="eco" ref="top4"><img src="../../assets/cellhome/a01.png" alt=""></div>
        <div class="ecological" ref="top5">
            <h1>{{$t('blockchainEco.title')}}</h1>
            <div class="bg">
                <div class="bg-position">
                    <div class="position1">{{$t('blockchainEco.desc1')}}</div>
                    <div class="position2">{{$t('blockchainEco.desc2')}}</div>
                    <div class="position3">{{$t('blockchainEco.desc3')}}</div>
                    <div class="position4">{{$t('blockchainEco.desc4')}}</div>
                    <div class="position5">{{$t('blockchainEco.desc5')}}</div>
                    <div class="position6">{{$t('blockchainEco.desc6')}}</div>
                    <div class="position7">{{$t('blockchainEco.desc7')}}</div>
                    <div class="position8">{{$t('blockchainEco.desc8')}}</div>
                    <div class="position9">{{$t('blockchainEco.desc9')}}</div>
                </div>
            </div>
        </div>
        <!-- <div class="about" ref="top5">
            <h1>{{$t('blockchainAbout.title')}}</h1>
            <div class="about-us">
                <p>{{$t('blockchainAbout.info1')}}</p>
                <p>{{$t('blockchainAbout.info2')}}</p>
                <p>{{$t('blockchainAbout.info3')}}</p>
            </div>
        </div>
        <div class="team">
            <h1>{{$t('blockchainTeam.title')}}</h1>
            <div class="item-outer">
                <div class="item-inner" v-for="(item, index) in teams" :key="index">
                    <div class="team-info">
                        <div class="info-title">
                            <span>{{item.name}}</span>
                            <span>{{item.title}}</span>
                        </div>
                        <p>{{item.info}}</p>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="rescenter">
            <h1>{{$t('blockchainRescenter.title')}}</h1>
            <div class="rescenter-center">
                <img src="../../assets/cellhome/a02.png" alt="">
                <div class="img2">
                    <!-- <img src="../../assets/cellhome/pic_xiada_yid.png" alt=""> -->
                    <p>{{$t('blockchainRescenter.info')}}</p>
                </div>
            </div>
        </div>
        <div class="partners">
            <h1>{{$t('blockchainPartners.title')}}</h1>
            <img src="../../assets/cellhome/a04.png" alt="">
        </div>
        <div class="copyright">
            <div class="copyright-outer">
                <div class="copyright-inner">
                    <h2>{{$t('blockchainCopyright.item1.title1')}}</h2>
                    <div class="item">
                        <span>{{$t('blockchainCopyright.item1.label1')}}</span>
                        <span>{{$t('blockchainCopyright.item1.label2')}}</span>
                        <span>{{$t('blockchainCopyright.item1.label3')}}</span>
                    </div>
                </div>
                <div class="copyright-inner">
                    <h2>{{$t('blockchainCopyright.item2.title1')}}</h2>
                    <div class="item">
                        <span>{{$t('blockchainCopyright.item2.label1')}}</span>
                        <span>{{$t('blockchainCopyright.item2.label2')}}</span>
                        <span>{{$t('blockchainCopyright.item2.label3')}}</span>
                    </div>
                </div>
                <div class="copyright-inner">
                    <h2>{{$t('blockchainCopyright.item3.title1')}}</h2>
                    <div class="item">
                        <span class="phone"><img src="../../assets/cellhome/icon_email.png" alt="">{{$t('blockchainCopyright.item3.label1')}}</span>
                        <!-- <span class="position"><img src="../../assets/cellhome/icon_add.png" alt="">{{$t('blockchainCopyright.item3.label2')}}</span>
                        <span>{{$t('blockchainCopyright.item3.label3')}}</span> -->
                    </div>
                </div>
            </div>
            <div class="footer">{{$t('footer')}}</div>
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
            language: '中文',
        }
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
    created() {

    },
    mounted() {
        let lang = localStorage.getItem('locale')
        switch (lang) {
            case 'zh_CN':
                this.language = '中文'
                break;
            case 'en_US':
                this.language = 'English'
                break;
            case 'zh_TW':
                this.language = '中文'
                break;
            default:
                break;
        }
    },
    methods: {
        handleIndex() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        handleProject() {
            document.body.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight - 50);
            document.documentElement.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight - 50);
        },
        handleAbout() {
            document.body.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight + this.$refs.top4.clientHeight)
            document.documentElement.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight + this.$refs.top4.clientHeight)
        },
        handleTeam() {
            document.body.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight + this.$refs.top4.clientHeight + this.$refs.top5.clientHeight - 50)
            document.documentElement.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight + this.$refs.top4.clientHeight + this.$refs.top5.clientHeight - 50)
        },
        handlePledge() {
            window.location.href = 'https://cellcoin.in/#/u/0x5921D17875Fc5fCcEc60CC9c2f6caC0D8E1Ac985'
        },
        toggleLang(lang) {
            if(lang == 'zh_CN') {
                localStorage.setItem('locale', 'zh_CN')
                this.$i18n.locale = localStorage.getItem('locale')
                this.language = '中文'
                this.$message({
                    message: '切换为中文简体！',
                    type: 'success'
                })
            } else if (lang == 'en_US') {
                localStorage.setItem('locale', 'en_US')
                this.$i18n.locale = localStorage.getItem('locale')
                this.language = 'English'
                this.$message({
                    message: 'Switch to English!',
                    type: 'success'
                })
            } else if(lang == 'zh_TW') {
                localStorage.setItem('locale', 'zh_TW')
                this.$i18n.locale = localStorage.getItem('locale')
                this.language = '中文'
                this.$message({
                    message: '切换为中文繁体!',
                    type: 'success'
                })
            }
        },
    }
}
</script>

<style lang="scss">
    .el-dropdown-menu {
        margin-right: 25px;
        padding: 10px;
        color: #ffffff;
        background-color: #262728;
        cursor: pointer;
        .el-dropdown-item {
            color: #ffffff;
        }
    }
    .cell-home {
        .bg-content {
            height: calc(100vh);
            background: url('../../assets/cellhome/pic_bg_banner.png') 0 0 no-repeat;
            background-size: 100% 100%;
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
                .header {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    left: 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    // height: 50px;
                    margin: 0 auto;
                    z-index: 1992;
                    background-color: #010d18;
                    .logo {
                        display: flex;
                        align-items: center;
                        margin: 0 0 0 10%;
                        .logo-pc {
                            width: 200px;
                            height: 50px;
                            margin-right: 5px;
                        }
                    }
                    .nav {
                        display: flex;
                        justify-content: space-around;
                        span {
                            font-size: 18px;
                            display: block;
                            padding: 10px 30px;
                            color: #ffffff;
                            cursor: pointer;
                        }
                        span:hover {
                            color: #1c8dea;
                            box-shadow: 0px -2px 0px #1c8dea inset;
                        }
                    }
                    .el-dropdown-link {
                        cursor: pointer;
                        color: #ffffff;
                        font-size: 18px;
                        margin-right: 40px;
                    }
                    .el-icon-arrow-down {
                        color: #ffffff;
                    }
                }
                .bg-info {
                    position: absolute;
                    left: 25%;
                    top: 180px;
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
                    .font {
                        display: block;
                        font-size: 34px;
                        text-align: center;
                        padding: 80px 0 40px;
                    }
                    .fontinfo {
                        display: block;
                        text-align: center;
                        font-size: 16px;
                    }
                    .center {
                        display: flex;
                        .center1 {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 16px;
                            height: 74px;
                            line-height: 74px;
                            text-align: center;
                            background-size: 100% 100%;
                            img {
                                display: block;
                                margin-right: 8px;
                            }
                        }
                        .center1:nth-child(1) {
                            width: 231px;
                            background: url('../../assets/cellhome/icon_home_dia3.png') 0 0 no-repeat;
                            background-size: 100% 100%;
                            img {
                                width: 20px;
                                height: 22px;
                            }
                        }
                        .center1:nth-child(2) {
                            width: 283px;
                            background: url('../../assets/cellhome/icon_home_dia1.png') 0 0 no-repeat;
                            background-size: 100% 100%;
                            img {
                                width: 25px;
                                height: 21px;
                            }
                        }
                        .center1:nth-child(3) {
                            width: 231px;
                            background: url('../../assets/cellhome/icon_home_dia3.png') 0 0 no-repeat;
                            background-size: 100% 100%;
                            img {
                                width: 25px;
                                height: 22px;
                            }
                        }
                        .center1:nth-child(1):hover, .center1:nth-child(3):hover {
                            width: 231px;
                            background: url('../../assets/cellhome/icon_home_dia2.png') 0 0 no-repeat;
                            background-size: 100% 100%;
                            cursor: pointer;
                        }
                        .center1:nth-child(2):hover {
                            width: 283px;
                            background: url('../../assets/cellhome/icon_home_dia4.png') 0 0 no-repeat;
                            background-size: 100% 100%;
                            cursor: pointer;
                        }
                    }
                    .font2 {
                        font-size: 16px;
                        margin-top: 50px;
                    }
                    .btn {
                        width: 75px;
                        height: 27px;
                        line-height: 27px;
                        margin-top: 30px;
                        text-align: center;
                        background-color: #1c8dea;
                        border-radius: 4px;
                        color: #ffffff;
                    }
                }
                .space {
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
                .star {
                    display: block;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: #FFF;
                    top: 100px;
                    left: 400px;
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
                    left: 90%;
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
                    left: 80%;
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
        .pro {
            position: relative;
            height: 900px;
	        background-color: #0f2239;
            .pro-info {
                height: 100%;
                h1 {
                    text-align: center;
                    padding-top: 89px;
                    font-size: 48px;
	                color: #e8eef3;
                }
                .pro-bg1 {
                    position: absolute;
                    top: 42px;
                    right: 14%;
                    width: 265px;
                    height: 210px;
                }
                .info {
                    position: absolute;
                    top: 220px;
                    left: 2%;
                    display: flex;
                    width: 90%;
                    .info-left {
                        width: 70%;
                    }
                    .info-right {
                        width: 30%;
                        padding-top: 10%;
                        font-size: 16px;
                        line-height: 26px;
                        color: #e8eef3;
                    }
                }
            }
        }
        .technology {
            height: 720px;
	        background-color: #ffffff;
            h1 {
                padding: 92px 0 110px;
                text-align: center;
                font-size: 30px;
                color: #000000;
            }
            .wallet-item {
                width: 88%;
                margin: 0 auto;
                display: flex;
                justify-content: space-around;
                .item {
                    width: 22%;
                    height: 300px;
                    border-radius: 10px;
                    img {
                        display: block;
                        width: 126px;
                        height: 129px;
                        margin: 25px auto;
                    }
                    span {
                        display: block;
                        text-align: center;
                        width: 90%;
                        margin: 0 auto;
                        color: #000000;
                        font-size: 20px;
                        padding-bottom: 10px;
                    }
                    p {
                        width: 200px;
                        margin: 0 auto;
                        text-align: center;
                        color: #7a7b7c;
                        font-size: 14px;
                    }
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
            height: 900px;
	        background-color: #10223a;
            h1 {
                padding: 92px 0 110px;
                text-align: center;
                font-size: 30px;
                color: #ffffff;
            }
            .bg {
                width: 1253px;
                height: 497px;
                margin: 0 auto;
                background: url('../../assets/cellhome/pic_bg_cellnetwork.png') 0 0 no-repeat;
                background-size: 100% 100%;
                .bg-position {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    div {
                        width: 106px;
                        height: 106px;
                        color: #ffffff;
                        line-height: 250px;
                        font-size: 20px;
                    }
                    .position1 {
                        position: absolute;
                        left: -53px;
                        top: 194px;
                        background: url('../../assets/cellhome/icon_jinrong_d.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                        // animation: 
                        //     animX 12s  cubic-bezier(0.36, 0, 0.64, 1) -1s infinite alternate,
                        //     animY 12s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
                        //     scale 4s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
                    }
                    // @keyframes animX{
                    //     0% {left: 0px;}
                    //     100% {left: 500px;}
                    // }
                    // @keyframes animY{
                    //     0% {top: 0px;}
                    //     100% {top: 300px;}
                    // }
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
                    .position1:hover {
                        background: url('../../assets/cellhome/icon_jinrong_s.png') 0 0 no-repeat;
                    }
                    .position2 {
                        position: absolute;
                        left: 240px;
                        top: 32px;
                        background: url('../../assets/cellhome/icon_shequ_d.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    .position2:hover {
                        background: url('../../assets/cellhome/icon_shequ_s.png') 0 0 no-repeat;
                    }
                    .position3 {
                        position: absolute;
                        right: 240px;
                        top: 32px;
                        background: url('../../assets/cellhome/icon_xinren_d.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    .position3:hover {
                        background: url('../../assets/cellhome/icon_xinren_s.png') 0 0 no-repeat;
                    }
                    .position4 {
                        position: absolute;
                        right: 200px;
                        top: 362px;
                        background: url('../../assets/cellhome/icon_gongyinglian_d.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    .position4:hover {
                        background: url('../../assets/cellhome/icon_gongying_s.png') 0 0 no-repeat;
                    }
                    .position5 {
                        position: absolute;
                        right: 450px;
                        bottom: -16px;
                        background: url('../../assets/cellhome/icon_shuju_d.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    .position5:hover {
                        background: url('../../assets/cellhome/icon_shuju_s.png') 0 0 no-repeat;
                    }
                    .position6 {
                        position: absolute;
                        left: 356px;
                        bottom: -16px;
                        background: url('../../assets/cellhome/icon_diya_d.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    .position6:hover {
                        background: url('../../assets/cellhome/icon_diya_s.png') 0 0 no-repeat;
                    }
                    .position7 {
                        position: absolute;
                        left: 550px;
                        top: -44px;
                        background: url('../../assets/cellhome/icon_game_d.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    .position7:hover {
                        background: url('../../assets/cellhome/icon_game_s.png') 0 0 no-repeat;
                    }
                    .position8 {
                        position: absolute;
                        right: -53px;
                        top: 194px;
                        background: url('../../assets/cellhome/icon_yiliao_d.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    .position8:hover {
                        background: url('../../assets/cellhome/icon_yiliao_s.png') 0 0 no-repeat;
                    }
                    .position9 {
                        position: absolute;
                        left: 76px;
                        bottom: 34px;
                        background: url('../../assets/cellhome/icon_jiaoyu_d.png') 0 0 no-repeat;
                        background-size: 100% 100%;
                    }
                    .position9:hover {
                        background: url('../../assets/cellhome/icon_jiaoyu_s.png') 0 0 no-repeat;
                    }
                }
            }
        }
        .rescenter {
            h1 {
                padding: 50px 0 80px;
                text-align: center;
                font-size: 30px;
                color: #000000;
            }
            .rescenter-center {
                display: flex;
                overflow: hidden;
                height: 530px;
                img {
                    width: 60%;
                }
                .img2 {
                    position: relative;
                    width: 40%;
                    background: url('../../assets/cellhome/pic_xiada_yid.png') 0 0 no-repeat;
                    background-size: 100% 100%;
                    p {
                        position: absolute;
                        bottom: 80px;
                        width: 80%;
                        left: 10%;
                        font-size: 16px;
                        line-height: 26px;
                    }
                }
            }
        }
        .partners {
            h1 {
                padding: 40px 0;
                text-align: center;
                font-size: 30px;
                color: #000000;
                background-color: #f9f9f9;
            }
            img {
                width: 100%;
            }
        }
        .about {
            height: 500px;
            background: url('../../assets/cellhome/pic_bg_aboutus.png') 0 0 no-repeat;
            background-size: 100% 500px;
            color: #ffffff;
            h1 {
                padding: 80px 0 10px;
                text-align: center;
                font-size: 26px;
            }
            .about-us {
                box-sizing: border-box;
                width: 860px;
                height: 228px;
                padding: 35px;
                margin: 0 auto;
                p {
                    margin-bottom: 30px;
                    font-size: 16px;
                }
            }
        }
        .team {
            h1 {
                padding: 35px 0;
                text-align: center;
                font-size: 26px;
            }
            .item-outer {
                width: 800px;
                padding-bottom: 50px;
                margin: 0 auto;
                .item-inner {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    img {
                        display: block;
                        width: 26%;
                        height: 100%;
                    }
                    .team-info {
                        box-sizing: border-box;
                        padding: 0 30px 30px;
                        width: 100%;
                        background-color: #f0f1f2;
                        .info-title {
                            padding: 24px 0;
                            color: #333;
                            span:nth-child(1), span:nth-child(2), p {
                                font-size: 18px;
                                margin-right: 20px;
                            }
                        }
                        p {
                            font-size: 16px;
                        }
                    }
                }
            }
        }
        .copyright {
            color: #ffffff;
            background-color: #10223a;
            .copyright-outer {
                display: flex;
                justify-content: space-around;
                padding: 20px 0 40px 0;
                h2 {
                    font-size: 14px;
                    padding: 20px 0;
                }
                .item {
                    font-size: 12px;
                    span {
                        display: block;
                        padding: 5px 0;
                        color: #b3b5b9;
                    }
                    .phone, .position {
                        display: flex;
                        align-items: center;
                        img {
                            display: block;
                            width: 10px;
                            height: 10px;
                            margin-right: 4px;
                        }
                    }
                }
            }
            .footer {
                line-height: 40px;
                text-align: center;
                color: #b3b5b9;
            }
        }
    }
</style>
