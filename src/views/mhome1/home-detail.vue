<template>
    <div class="home-detail">
        <div class="bg-content" ref="top1">
            <div class="bg-content-outer">
                <div class="header">
                    <div class="logo">
                        <img class="logo-pc" src="../../assets/cellhome/logo_06.png" alt="">
                    </div>
                    <div class="nav">
                        <span @click="handleIndex">{{$t('blockchainTop.nav1')}}</span>
                        <span @click="handlePledge">{{$t('blockchainTop.nav5')}}</span>
                        <span @click="handleTeam">{{$t('blockchainTop.nav6')}}</span>
                    </div>
                   <el-dropdown>
                        <span class="el-dropdown-link">
                            {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="toggleLang('zh_CN')" :disabled="$i18n.locale == 'zh_CN'">中文简体</el-dropdown-item>
                            <el-dropdown-item @click.native="toggleLang('zh_TW')" :disabled="$i18n.locale == 'zh_TW'">中文繁体</el-dropdown-item>
                            <el-dropdown-item @click.native="toggleLang('en_US')" :disabled="$i18n.locale == 'en_US'">English</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <downloadPc></downloadPc>
            </div>
        </div>
        <div class="bg-Dapps">
            <div class="mokuai">
                <div class="lar">{{$t('mokuai1.title')}}</div>
                <div class="mid">{{$t('mokuai1.content')}}</div>
                <img src="../../assets/cellmhome1/wallet_icon_1.png" alt="">
            </div>
            <div class="mokuai">
                <div class="lar">{{$t('mokuai2.title')}}</div>
                <div class="mid">{{$t('mokuai2.content')}}</div>
                <img src="../../assets/cellmhome1/wallet_icon_2.png" alt="">
            </div>
            <div class="mokuai">
                <div class="lar">{{$t('mokuai3.title')}}</div>
                <div class="mid">{{$t('mokuai3.content')}}</div>
                <img src="../../assets/cellmhome1/wallet_icon_3.png" alt="">
            </div>
            <div class="mokuai">
                <div class="lar">{{$t('mokuai4.title')}}</div>
                <div class="mid">{{$t('mokuai4.content')}}</div>
                <img src="../../assets/cellmhome1/wallet_icon_4.png" alt="">
            </div>
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
import downloadPc from '@/views/mhome1/components/downloadPc'
export default {
    components: {
        downloadPc
    },
    props: {

    },
    data() {
        return {
            language: '中文',
            lang: 'zh_CN',
            showgoogle: false
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
        this.lang = lang
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
            this.$router.push({path: './cellhome'})
        },
        handleTeam() {
            document.body.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight + this.$refs.top4.clientHeight + this.$refs.top5.clientHeight - 50)
            document.documentElement.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight + this.$refs.top4.clientHeight + this.$refs.top5.clientHeight - 50)
        },
        handlePledge() {
            window.location.href = 'https://cellcoin.in/#/u/0x5Ab174f779Df6c23A4d3574E01C627b04f340aBb'
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
            this.lang = lang
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
    .home-detail {
        .bg-content {
            height: calc(100vh);
            background: url('../../assets/cellmhome1/pic_bg_banner1.png') 0 0 no-repeat;
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
                    margin: 0 auto;
                    z-index: 1992;
                    background-color: #0a213c;
                    .logo {
                        display: flex;
                        align-items: center;
                        margin: 0 0 0 10%;
                        .logo-pc {
                            width: 200px;
                            height: 45px;
                            margin-right: 5px;
                        }
                    }
                    .nav {
                        display: flex;
                        justify-content: space-around;
                        margin-left: 30%;
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
            }
        }
        .bg-Dapps {
            padding: 84px 14%;
                display: flex;
                flex-wrap: wrap;
            .mokuai {
                box-sizing: border-box;
                width: 48%;
                height: 48%;
                margin: 1%;
                padding: 25px 32px;
                border: solid 1px #e5e5e5;
                .lar {
                    font-size: 30px;
                    color: #333333;
                    font-family: PingFangSC-Light;
                }
                .mid {
                    margin: 20px 0;
                    font-size: 16px;
                    color: #6c7074;
                    font-family: PingFangSC-Light;
                }
                img {
                    display: block;
                    width: 70%;
                    height: 70%;
                    margin: 0 auto;
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
    .poper1 {
        text-align: center;
        img {
            margin: 0 auto;
        }
        .wx_detail {
            width: 140px;
            height: 140px;
        }
        span {
            display: block;
            text-align: center;
            color: #10243c;
            font-size: 14px;
        }
    }
</style>
