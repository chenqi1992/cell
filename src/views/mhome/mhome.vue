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
                <h1>全新STAKING POS共识机制</h1>
                <div class="type">
                    <div class="type-item">
                        <div class="type-item--header">
                            <div class="title">具有STAKING（质押）特色的PoS共识机制</div>
                            <img src="../../assets/m/1.png" alt="">
                        </div>
                        <span>相较于以往POS共识机制，Cellnetwork结合智能合约采用了更为新颖的STAKING（质押）模式，用户不仅仅是传统的持币就能产生收益，而是需要通过STAKING(质押)动作将其代币质押到Cellnetwork项目中节点指定的地址上获取收益。</span>
                    </div>
                    <div class="type-item">
                        <div class="type-item--header">
                            <div class="title">节点设置优势</div>
                            <img src="../../assets/m/2.png" alt="">
                        </div>
                        <span>Cellnetwork还将为节点提供底层服务器搭建及维护的服务，节点将省去大量的服务器维护和技术支持方面的工作，这样做的目的是可以让区块链爱好者更低门槛、更加便捷的成为Cellnetwork项目中的一份子。</span>
                    </div>
                    <div class="type-item">
                        <div class="type-item--header">
                            <div class="title">节点投票机制</div>
                            <img src="../../assets/m/3.png" alt="">
                        </div>
                        <span>Cellnetwork出于为建设更好更优质的社区的考虑，将推出节点投票机制，由节点提出并对事件投票做出决策，用户也可以通过质押自己的通证给相应的节点用以支持节点，Cellnetwork中还省去了以往繁琐的投票流程，可以快速且公平确认最终的投票结果，从而更好的进行社区治理。在安全性方面，每个事件的发起都需要通过质押一定数额的通证作为保障，解决了以往POS共识项目中投票权分配不公平且造成出现一定的作恶节点危害社区的问题。</span>
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
                            <p>在Cellnetwork中，将组建一个去中心化的闪兑交易所，通过配置高水准的做市商团队改善了大多闪兑交易所缺乏的通证流通性。</p>
                        </div>
                        <div class="item item-before">
                            <h2>优势二</h2>
                            <p>Cellnetwork推出了特别的节点经纪人模式，激励节点更多的参与进来。</p>
                        </div>
                        <div class="item">
                            <h2>优势三</h2>
                            <p>目前Cellnetwork项目已经实现与ETH的闪兑功能，未来Cellnetwrok项目将通过跨链技术实现更多币种的闪兑。</p>
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
                                    <span>STAKING、闪兑需求服务</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/m/22.png" alt="">
                                    <span>一对一私行级客户服务</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/m/33.png" alt="">
                                    <span>私人定制级需求服务</span>
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
                <p>CELL NETWORK FOUNDATION LTD.有限公司位于美丽的花园城市新加坡，是在应用软件开发领域中专业从事应用系统开发、信息安全服务的高新技术企业。</p>
                <p>公司秉承 “专业、务实、高效、创新”的企业精神，拥有一群年轻活力、敢拼实干的优秀员工，公司内部具有良好的内部管理机制，优良的工作环境以及良好的激励机制，着力于打造产品质量行业领先、服务品质一流的科技公司。</p>
                <p>我们将以每一位客户的业务需求为导向，从客户利益最大化出发，制定并提供最完善的信息化应用解决方案并尊重客户提出的一切修改意见，及时加以完善。 "</p>
            </div>
        </div>
        <div class="team">
            <h1>我们的团队</h1>
            <div class="item-outer">
                <div class="item-inner" v-for="(item, index) in teams" :key="index">
                    <!-- <img :src="item.img" alt=""> -->
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
                        <span>#07-02C CENTRO BIANCO SINGAPORE</span>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p>CELL NETWORK FOUNDATION LTD. 006596617606</p>
                <p>73 UPPER PAYA LEBAR ROAD #07-02C CENTRO BIANCO SINGAPORE© 2019-2020 h5.cellnetwork.com All rights reserved</p>
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
                {img: require('../../assets/peo_1.png'), name: 'Michael Lukianoff', title: '基金会董事长', info: '留美硕士，多年从事与金融行业及商业领域相关工作，对风险控制、战略分析、项目执行有着丰富的实践经验，近些年开展对区块链领域方面的研究，将多年累积的市场经验结合区块链应用，打造现代化全新商业联盟。'},
                {img: require('../../assets/peo_2.png'), name: 'Trond Hov', title: '基金会理事', info: '毕业于英国剑桥大学，具有在信息技术和服务行业相关工作经验，有较强的开拓创新精神，对市场风险、资金管理有深入的理解和实践经验，目前Wilson主要负责基金会的资产管理运作。'},
                {img: require('../../assets/peo_3.png'), name: 'Geona Lee', title: '基金会秘书长', info: '拥有数十年的大数据从业经验，日常致力于对处理大量结构性数据与非结构性数据的数据系统进行架构设计，通过数据分析对项目数据库方面工作做出指导性意见。'},
                {img: require('../../assets/peo_4.png'), name: 'Kevin Chen', title: '开发工程师', info: '毕业于美国南加州大学，拥有数十年硅谷工作经验，对区块链的底层技术有深入的研究，研发分散化数字货币机制，对区块链与加密货币网络的发展做出了巨大贡献，同时深刻理解区块链共识算法，如常见的   PoW、PoS以及DPoS，目前担任Cellnetwork首席开发技术工程师，负责Cellnetwork共享链中主要的底层框架建设及钱包的开发维护。'},
                {img: require('../../assets/peo_5.png'), name: 'Aaron Charles', title: '开发工程师', info: '毕业于美国斯坦福大学，曾任职Facebook、Google等国际知名企业开发技术岗位，对计算机编程语言专业掌握度极高，个人拥有多年区块链技术经验，熟悉solidity智能合约开发，对区块链加密算法、共识机制、虚机、存储有深入理解，目前负责Cellnetwork中加密算法的设计、安全测试及区块链游览器的搭建和维护。'}
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
                        font-size: rem(28);
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
                    padding: 0 rem(90) rem(20);
                    font-size: rem(24);
                    line-height: rem(40);
                    color: #999;
                }
            }
            .pro-type {
                background-color: #f7f7f8;
                h1 {
                    font-size: rem(30);
                    text-align: center;
                    padding: rem(80) 0;
                }
                .type {
                    display: flex;
                    flex-wrap: wrap;
                    padding: 2%;
                    .type-item {
                        margin: rem(10) 1.4%;
                        background-color: #ffffff;
                        .type-item--header {
                            box-sizing: border-box;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            background-color: #e6e6e6;
                            height: rem(80);
                            padding: rem(30);
                            .title {
                                line-height: rem(60);
                                text-align: center;
                            }
                            img {
                                display: block;
                                width: rem(50);
                                height: rem(50);
                            }
                        }
                        span {
                            display: block;
                            width: 90%;
                            margin: 0 auto;
                            padding: rem(30) 0;
                            line-height: rem(40);
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
                        padding: rem(220) 0 rem(80);
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
                // display: flex;
                // flex-wrap: wrap;
                padding: 0 3% 5%;
                // column-width: 360px;
                column-count: 2;
                // column-gap: 1rem;
                .item-inner {
                    // width: 47%;
                    // margin: 0 1.4%;
                    margin-bottom: 10px;
                    img {
                        display: block;
                        width: 100%;
                        height: rem(200);
                    }
                    .team-info {
                        box-sizing: border-box;
                        padding: 0 rem(10) rem(0);
                        width: 100%;
                        background-color: #f0f1f2;
                        .info-title {
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            padding: rem(24) 0;
                            color: #333;
                            span:nth-child(1) {
                                font-weight: bold;
                                font-size: rem(30);
                                margin-right: rem(5);
                            }
                        }
                        p {
                            line-height: rem(40);
                        }
                    }
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
