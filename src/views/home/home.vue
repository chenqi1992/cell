<template>
    <div class="home">
        <div class="bg-content" ref="top1">
            <img class="bg" src="../../assets/banner_1.png" alt="">
            <div class="header">
                <div class="logo"><img src="../../assets/logo_1.png" alt=""></div>
                <div class="nav">
                    <span>首页</span>
                    <span @click="handleProject">项目简介</span>
                    <span @click="handleAbout">关于我们</span>
                    <span @click="handleTeam">团队</span>
                </div>
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
                        <img src="../../assets/5.png" alt="">
                        <span>技术、资金、数量、安全、速度</span>
                    </div>
                    <div class="type-item">
                        <div class="title">节点应用优势</div>
                        <img src="../../assets/6.png" alt="">
                        <span>主网投票流程的劣势，引入投票 预言机，提供服务类似市场调研</span>
                    </div>
                    <div class="type-item">
                        <div class="title">实体经济的落地应用</div>
                        <img src="../../assets/7.png" alt="">
                        <span>商业联盟运转及管理、积分管理、去中心化的社区治理其他SRAKING项目的应用</span>
                    </div>
                </div>
            </div>
            <div class="pro-advantage">
                <img class="advantage-img" src="../../assets/banner_2.png" alt="">
                <h1 class="advantage-title">去中心化的闪兑交易所</h1>
                <div class="advantage-outer">
                    <div class="advantage-inner">
                        <div class="item">
                            <h2>优势一</h2>
                            <p>链上交易、甄选全球顶级做市商提供报价服务确保闪兑交易所有充足的流通性和市场价格优势</p>
                        </div>
                        <div class="item">
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
                            <img src="../../assets/wallet_13.png" alt="">
                        </div>
                        <div class="wallet-right">
                            <h1>钱包APP三大功能</h1>
                            <div class="wallet-item">
                                <div class="item">
                                    <img src="../../assets/8.png" alt="">
                                    <span>其他去中心化的钱包的优势</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/9.png" alt="">
                                    <span>一对一私行级客户服务</span>
                                </div>
                                <div class="item">
                                    <img src="../../assets/10.png" alt="">
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
                <div class="copyright-item">
                    <h2>项目简介</h2>
                    <div class="item">
                        <span>质押</span>
                        <span>去中心化交易所</span>
                        <span>钱包</span>
                    </div>
                </div>
                <div class="copyright-item">
                    <h2>联系我们</h2>
                    <div class="item">
                        <span class="phone"><img src="../../assets/phone.png" alt="">电话：006596617606</span>
                        <span class="position"><img src="../../assets/position.png" alt="">地址：73 UPPER PAYA LEBAR ROAD</span>
                        <span>#07-02C CENTRO BIANCO SINGAPORE 534818</span>
                    </div>
                </div>
            </div>
            <div class="footer">北京链上科技有限责任公司，010-82772070，北京市海淀区上地三街9号B座2层B307-1© 2018-2019 chainup.com All rights reserved</div>
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
        handleProject() {
            document.body.scrollTop = this.$refs.top1.clientHeight;
            document.documentElement.scrollTop = this.$refs.top1.clientHeight;
        },
        handleAbout() {
            document.body.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight)
            document.documentElement.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight)
        },
        handleTeam() {
            document.body.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight)
            document.documentElement.scrollTop = Number(this.$refs.top1.clientHeight + this.$refs.top2.clientHeight + this.$refs.top3.clientHeight)
        }
    }
}
</script>

<style lang="scss">
    .home {
        .bg-content {
            position: relative;
            height: 400px;
            background-color: #999999;
            .bg {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 400px;
                z-index: 10;
                background-color: #999999;
            }
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
                z-index: 11;
                .logo {
                    img {
                        display: block;
                        width: 90px;
                        height: 30px;
                    }
                }
                .nav {
                    display: flex;
                    justify-content: space-around;
                    span {
                        display: block;
                        padding: 0 30px;
                        color: #ffffff;
                        cursor: pointer;
                    }
                }
            }
            .bg-info {
                position: absolute;
                left: 10%;
                top: 110px;
                height: 110px;
                z-index: 11;
                .font1, .font2 {
                    display: block;
                    color: #ffffff;
                }
                .font1 {
                    font-size: 30px;
                }
                .font1:before {
                    content: "";
                    position: absolute;
                    display: block;
                    left: 0;
                    top: 60px;
                    width: 60px;
                    height: 0;
                    border-top: 3px solid #008cd6;
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
        }
        .pro {
            .pro-info {
                h1, .info {
                    width: 100%;
                    text-align: center;
                }
                h1 {
                    padding-top: 20px;
                    font-size: 20px;
                }
                .info {
                    padding-bottom: 20px;
                    font-size: 14px;
                    line-height: 40px;
                }
            }
            .pro-type {
                height: 400px;
                background-color: #f7f7f8;
                h1 {
                    font-size: 16px;
                    text-align: center;
                    padding: 40px 0;
                }
                .type {
                    display: flex;
                    justify-content: space-around;
                    width: 800px;
                    margin: 0 auto;
                    .type-item {
                        width: 255px;
                        margin: 0 5px;
                        background-color: #ffffff;
                        .title {
                            line-height: 38px;
                            text-align: center;
                            background-color: #e6e6e6;
                        }
                        img {
                            display: block;
                            width: 50px;
                            height: 50px;
                            margin: 40px auto;
                        }
                        span {
                            display: block;
                            width: 80%;
                            margin: 0 auto;
                            padding: 10px 0;
                            line-height: 20px;
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
                    height: 370px;
                }
                .wallet-img {
                    height: 370px;
                    .wallet-img-outer {
                        display: flex;
                        justify-content: space-between;
                        width: 800px;
                        height: 100%;
                        margin: 0 auto;
                        .wallet-left {
                            display: flex;
                            align-items: center;
                            width: 40%;
                            img {
                                display: block;
                                width: 200px;
                                height: 240px;
                            }
                        }
                        .wallet-right {
                            box-sizing: border-box;
                            width: 60%;
                            padding-top: 30px;
                            h1 {
                                font-size: 16px;
                                padding: 40px 0;
                            }
                            .wallet-item {
                                display: flex;
                                justify-content: space-around;
                                .item {
                                    width: 210px;
                                    height: 150px;
                                    box-shadow: 0px 0px 8px 0px rgba(228, 229, 230, 0.65);
                                    border-radius: 10px;
                                    img {
                                        display: block;
                                        width: 40px;
                                        height: 40px;
                                        margin: 25px auto;
                                    }
                                    span {
                                        display: block;
                                        text-align: center;
                                        width: 53%;
                                        margin: 0 auto;
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
                    top: 35px;
                    font-size: 20px;
                    text-align: center;
                    color: #ffffff;
                }
                .advantage-outer {
                    position: absolute;
                    top: 260px;
                    width: 100%;
                    .advantage-inner {
                        display: flex;
                        justify-content: space-around;
                        width: 800px;
                        margin: 0 auto;
                        .item {
                            position: relative;
                            flex: 1;
                            box-sizing: border-box;
                            padding: 0 0 18px 22px;
                            background-color: #f4f4f4;
                            h2 {
                                line-height: 52px;
                                font-size: 16px;
                                color: #171717;
                            }
                            p {
                                line-height: 22px;
                                color: #666666;
                            }
                        }
                        .item:before {
                            content: "";
                            position: absolute;
                            display: block;
                            left: 7px;
                            top: 18px;
                            width: 1px;
                            border-top: 105px solid #ededed;
                        }
                    }
                }
            }
        }
        .about {
            height: 370px;
            background: url('../../assets/banner_3.png') 0 0 no-repeat;
            background-size: 100% 370px;
            h1 {
                padding: 35px 0;
                text-align: center;
                font-size: 20px;
            }
            .about-us {
                box-sizing: border-box;
                width: 800px;
                height: 228px;
                padding: 35px;
                margin: 0 auto;
                background-color: #ffffff;
                p {
                    margin-bottom: 30px;
                }
            }
        }
        .team {
            h1 {
                padding: 35px 0;
                text-align: center;
                font-size: 20px;
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
                        height: 130px;
                    }
                    .team-info {
                        box-sizing: border-box;
                        padding: 0 30px;
                        width: 74%;
                        background-color: #f0f1f2;
                        .info-title {
                            padding: 24px 0;
                            color: #333;
                            span:nth-child(1) {
                                font-size: 16px;
                                margin-right: 20px;
                            }
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
            }
        }
    }
</style>
