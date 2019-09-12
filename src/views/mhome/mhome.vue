<template>
    <div class="mhome">
        <div class="bg-content" ref="top1">
            <img class="bg" src="../../assets/m/banner_1.png" alt="">
            <div class="logo"><img src="../../assets/logo_1.png" alt=""></div>
            <div class="menu">
                <van-popup
                v-model="show"
                position="right"
                :style="{ height: '100%' }"
                >
                <div class="nav">
                    <span>首页</span>
                    <span @click="handleProject">项目简介</span>
                    <span @click="handleAbout">关于我们</span>
                    <span @click="handleTeam">团队</span>
                </div>
                </van-popup>
                <img @click="handleMenu" src="../../assets/m/menu.png" alt="">
            </div>
            <div class="bg-info">
                <span class="font1">全球领先的区块链技术服务商</span>
                <span class="font2">安全、稳定、可靠、覆盖全球的一站式技术服务</span>
                <div class="btn">联系我们→</div>
            </div>
        </div>
        <div class="pro" ref="top2">  
            <div class="pro-info">
                <h1>项目简介</h1>
                <div class="info">区块链基础服务持续更新中，快速迭代，随意组合，总能满足你的业务需求</div>
            </div>
            <div class="pro-type">
                <h1>质押与节点的功能</h1>
                <div class="type">
                    <div class="type-item">
                        <div class="title">节点设置优势</div>
                        <img src="../../assets/m/1.png" alt="">
                        <span>技术、资金、数量、安全、速度</span>
                    </div>
                    <div class="type-item">
                        <div class="title">节点应用优势</div>
                        <img src="../../assets/m/2.png" alt="">
                        <span>主网投票流程的劣势，引入投票 预言机，提供服务类似市场调研</span>
                    </div>
                    <div class="type-item">
                        <div class="title">实体经济的落地应用</div>
                        <img src="../../assets/m/3.png" alt="">
                        <span>商业联盟运转及管理、积分管理、去中心化的社区治理其他SRAKING项目的应用</span>
                    </div>
                </div>
            </div>
            <div class="pro-advantage">
                <img class="advantage-img" src="../../assets/m/banner_2.png" alt="">
                <h1 class="advantage-title">去中心化的闪兑交易所</h1>
                <div class="advantage-outer">
                    <div class="advantage-inner">
                        <div class="item item-before">
                            <h2>优势一</h2>
                            <p>链上交易、甄选全球顶级做市商提供报价服务确保闪兑交易所有充足的流通性和市场价格优势</p>
                        </div>
                        <div class="item item-before">
                            <h2>优势二</h2>
                            <p>链上交易、甄选全球顶级做市商提供报价服务确保闪兑交易所有充足的流通性和市场价格优势</p>
                        </div>
                        <div class="item">
                            <h2>优势三</h2>
                            <p>独特的节点交易经纪人模式</p>
                        </div>
                    </div>
                </div>
                <div class="wallet-img">
                    <div class="wallet-img-outer">
                        <div class="wallet-left">
                            <img src="../../assets/m/banner_3.png" alt="">
                        </div>
                        <div class="wallet-right">
                            <h1>钱包APP三大功能</h1>
                            <div class="wallet-item">
                                <div class="item">
                                    <img src="../../assets/m/11.png" alt="">
                                    <span>其他去中心化的钱包的优势</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/m/22.png" alt="">
                                    <span>一对一私行级客户服务</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/m/33.png" alt="">
                                    <span>STAKING闪兑需求服务</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about" ref="top3">
            <h1>关于我们</h1>
            <div class="about-us">
                <p>"有限公司位于美丽的花园城市新加坡，是在应用软件开发领域中专业从事应用系统开发、信息安全服务的高新技术企业。</p>
                <p>公司秉承 “专业、务实、高效、创新”的企业精神，拥有一群年轻活力、敢拼实干的优秀员工，公司内部具有良好的内部管理机制，优良的工作环境以及良好的激励机制，着力于打造产品质量行业领先、服务品质一流的科技公司。</p>
                <p>我们将以每一位客户的业务需求为导向，从客户利益最大化出发，制定并提供最完善的信息化应用解决方案并尊重客户提出的一切修改意见，及时加以完善。 "</p>
            </div>
        </div>
        <div class="team">
            <h1>我们的团队</h1>
            <div class="item-outer">
                <div class="item-inner" v-for="(item, index) in teams" :key="index">
                    <img :src="item.img" alt="">
                    <div class="team-info">
                        <div class="info-title">
                            <span>{{item.name}}</span>
                            <span>{{item.title}}</span>
                        </div>
                        <p>{{item.info}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="copyright-outer">
                <div class="copyright-inner">
                    <h2>企业介绍</h2>
                    <div class="item">
                        <span>发展愿景</span>
                        <span>团队介绍</span>
                        <span>企业历程</span>
                    </div>
                </div>
                <div class="copyright-inner">
                    <h2>项目简介</h2>
                    <div class="item">
                        <span>质押</span>
                        <span>去中心化交易所</span>
                        <span>钱包</span>
                    </div>
                </div>
                <div class="copyright-inner">
                    <h2>联系我们</h2>
                    <div class="item">
                        <span class="phone"><img src="../../assets/phone.png" alt="">电话：006596617606</span>
                        <span class="position"><img src="../../assets/position.png" alt="">地址：73 UPPER PAYA LEBAR ROAD</span>
                        <span>#07-02C CENTRO BIANCO SINGAPORE 534818</span>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p>北京链上科技有限责任公司，010-82772070</p>
                <p>北京市海淀区上地三街9号B座2层B307-1© 2018-2019 chainup.com All rights reserved</p>
            </div>
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
            show: false,
            teams: [
                {img: require('../../assets/peo_1.png'), name: 'Geona Li', title: '基金会秘书长', info: '拥有数十年的大数据从业经验，日常致力于对处理大量结构性数据与非结构性数据的数据系统进行架构设计，通过数据分析对项目数据库方面工作做出指导性意见。'},
                {img: require('../../assets/peo_1.png'), name: 'Geona Li', title: '基金会秘书长', info: '拥有数十年的大数据从业经验，日常致力于对处理大量结构性数据与非结构性数据的数据系统进行架构设计，通过数据分析对项目数据库方面工作做出指导性意见。'},
                {img: require('../../assets/peo_1.png'), name: 'Geona Li', title: '基金会秘书长', info: '拥有数十年的大数据从业经验，日常致力于对处理大量结构性数据与非结构性数据的数据系统进行架构设计，通过数据分析对项目数据库方面工作做出指导性意见。'},
                {img: require('../../assets/peo_1.png'), name: 'Geona Li', title: '基金会秘书长', info: '拥有数十年的大数据从业经验，日常致力于对处理大量结构性数据与非结构性数据的数据系统进行架构设计，通过数据分析对项目数据库方面工作做出指导性意见。'},
                {img: require('../../assets/peo_1.png'), name: 'Geona Li', title: '基金会秘书长', info: '拥有数十年的大数据从业经验，日常致力于对处理大量结构性数据与非结构性数据的数据系统进行架构设计，通过数据分析对项目数据库方面工作做出指导性意见。'}
            ]
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        handleMenu() {
            this.show = true
        },
        handleProject() {
            document.body.scrollTop = this.$refs.top1.clientHeight;
            document.documentElement.scrollTop = this.$refs.top1.clientHeight;
            this.show = false
        },
        handleAbout() {
            document.body.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight)
            document.documentElement.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight)
            this.show = false
        },
        handleTeam() {
            document.body.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight)
            document.documentElement.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight)
            this.show = false
        }
    }
}
</script>

<style lang="scss">
    @import '@/common/scss/commonsize.scss';
    .mhome {
        .bg-content {
            position: relative;
            width: 100%;
            height: rem(360);
            .bg {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: rem(360);
                z-index: 10;
                background-color: #999999;
            }
            .logo {
                position: absolute;
                top: 0;
                left: 5%;
                display: flex;
                align-items: center;
                height: 50px;
                z-index: 11;
                img {
                    display: block;
                    width: rem(128);
                    height: rem(26);
                }
            }
            .menu {
                position: absolute;
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
                    }
                }
            }
            .bg-info {
                position: absolute;
                left: 5%;
                top: rem(110);
                height: rem(110);
                z-index: 11;
                .font1, .font2 {
                    display: block;
                    color: #ffffff;
                }
                .font1 {
                    font-size: rem(30);
                }
                .font1:before {
                    content: "";
                    position: absolute;
                    display: block;
                    left: 0;
                    top: rem(60);
                    width: rem(60);
                    height: 0;
                    border-top: 3px solid #008cd6;
                }
                .font2 {
                    font-size: rem(16);
                    margin-top: rem(50);
                }
                .btn {
                    width: rem(156);
                    height: rem(54);
                    line-height: rem(54);
                    margin-top: rem(30);
                    text-align: center;
                    background-color: #1c8dea;
                    border-radius: 4px;
                    color: #ffffff;
                }
            }
        }
        .pro {
            .pro-info {
                height: rem(300);
                h1, .info {
                    width: 100%;
                    text-align: center;
                }
                h1 {
                    padding: rem(40) 0;
                    font-size: rem(44);
                }
                .info {
                    box-sizing: border-box;
                    padding: 0 rem(20) rem(20);
                    font-size: rem(24);
                    line-height: rem(40);
                    color: #999;
                }
            }
            .pro-type {
                background-color: #f7f7f8;
                h1 {
                    font-size: 16px;
                    text-align: center;
                    padding: 40px 0;
                }
                .type {
                    display: flex;
                    flex-wrap: wrap;
                    padding: 0 2%;
                    .type-item {
                        width: 47%;
                        margin: rem(10) 1.4%;
                        background-color: #ffffff;
                        .title {
                            line-height: rem(50);
                            text-align: center;
                            background-color: #e6e6e6;
                        }
                        img {
                            display: block;
                            width: rem(50);
                            height: rem(50);
                            margin: rem(40) auto;
                        }
                        span {
                            display: block;
                            width: 90%;
                            margin: 0 auto;
                            padding: rem(10) 0;
                            line-height: rem(32);
                            border-top: 1px solid #e5e5e5;
                        }
                    }
                }
            }
            .pro-advantage {
                position: relative;
                .advantage-img, .wallet-img {
                    display: block;
                    width: 100%;
                }
                .advantage-img {
                    height: rem(430);
                }
                .wallet-img {
                    .wallet-img-outer {
                        display: flex;
                        justify-content: space-between;
                        margin: 0 auto;
                        padding: rem(180) 0 rem(80);
                        .wallet-left {
                            display: flex;
                            align-items: center;
                            width: 30%;
                            padding-top: rem(260);
                            img {
                                display: block;
                                width: rem(168);
                                height: rem(168);
                                margin: 0 auto;
                            }
                        }
                        .wallet-right {
                            box-sizing: border-box;
                            width: 70%;
                            padding-top: 30px;
                            h1 {
                                font-size: rem(26);
                                padding: rem(100) 0 rem(50) rem(40);
                            }
                            .wallet-item {
                                display: flex;
                                justify-content: space-around;
                                .item {
                                    width: rem(160);
                                    height: rem(154);
                                    box-shadow: 0px 0px 8px 0px rgba(228, 229, 230, 0.65);
                                    border-radius: 10px;
                                    img {
                                        display: block;
                                        width: rem(52);
                                        height: rem(52);
                                        margin: rem(25) auto;
                                    }
                                    span {
                                        display: block;
                                        text-align: center;
                                        width: 90%;
                                        margin: 0 auto;
                                        font-size: rem(12);
                                        color: #666666;
                                    }
                                }
                            }
                        }
                    }
                }
                .advantage-title {
                    position: absolute;
                    width: 100%;
                    top: rem(35);
                    font-size: rem(30);
                    text-align: center;
                    color: #ffffff;
                }
                .advantage-outer {
                    position: absolute;
                    top: rem(290);
                    width: 100%;
                    .advantage-inner {
                        width: 93%;
                        margin: 0 auto;
                        .item {
                            position: relative;
                            box-sizing: border-box;
                            padding: rem(20) rem(20);
                            background-color: #f4f4f4;
                            h2 {
                                line-height: rem(52);
                                font-size: rem(16);
                                color: #171717;
                            }
                            p {
                                line-height: rem(32);
                                color: #666666;
                            }
                        }
                        .item-before:before {
                            content: "";
                            position: absolute;
                            display: block;
                            left: 5%;
                            top: rem(150);
                            width: 90%;
                            height: 0;
                            border-top: 1px solid #ededed;
                        }
                    }
                }
            }
        }
        .about {
            padding-bottom: rem(40);
            background: url('../../assets/banner_3.png') 0 0 no-repeat;
            background-size: 100% 100%;
            h1 {
                padding: rem(35) 0;
                text-align: center;
                font-size: rem(30);
            }
            .about-us {
                box-sizing: border-box;
                width: 85%;
                padding: rem(35);
                margin: 0 auto;
                background-color: #ffffff;
                p {
                    margin-bottom: rem(30);
                }
            }
        }
        .team {
            h1 {
                padding: rem(35) 0;
                text-align: center;
                font-size: rem(30);
            }
            .item-outer {
                display: flex;
                flex-wrap: wrap;
                padding: 0 2% 4%;
                .item-inner {
                    width: 47%;
                    margin: 0 1.4%;
                    margin-bottom: 10px;
                    img {
                        display: block;
                        width: 100%;
                        height: rem(200);
                    }
                    .team-info {
                        box-sizing: border-box;
                        padding: 0 rem(10) rem(20);
                        width: 100%;
                        background-color: #f0f1f2;
                        .info-title {
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            padding: rem(24) 0;
                            color: #333;
                            span:nth-child(1) {
                                font-size: rem(16);
                                margin-right: rem(5);
                            }
                        }
                    }
                }
                .item-inner:nth-child(2n) {
                    margin-bottom: rem(30);
                }
            }
        }
        .copyright {
            color: #ffffff;
            background-color: #2f3237;
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
            }
        }
    }
</style>
