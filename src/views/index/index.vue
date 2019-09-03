<template>
    <div class="index">
        <div class="header">
            <img src="../../assets/logo.png" alt="">
            <img src="../../assets/cell_t.png" alt="">
        </div>
        <div class="banner">
            <img src="../../assets/banner.png" alt="">
        </div>
        <div class="content">
            <div class="item">
                <h1>公司简介</h1>
                <div class="item-info">有限公司位于美丽的花园城市新加坡，是在应用软件开发领域中专业从事应用系统开发、信息安全服务的高新技术企业。</div>
                <div class="item-info">公司秉承“专业、务实、高效、创新”的企业精神，拥有一群年轻活力、敢拼实干的优秀员工，公司内部具有良好的内部管理机制，优良的工作环境以及良好的激励机制，着力于打造产品质量行业领先、服务品质一流的科技公司。</div>
            </div>
            <div class="item">
                <h1>我们可以提供</h1>
                <div class="item-support">
                    <p>——安全、完整的系统策划和设计：</p>
                    <div>公司在产品研发方面的高投入，众多项目的实际应用，让我们具备了相应的的创造力和丰富的经验，这将成为您解决疑问和难题的良好保证。可为您提供多方面完善的策划：如项目的规划立项、总体方案设计、方案评估论证。</div>
                </div>
                <div class="item-support">
                    <p>——先进、专业的技术支持：</p>
                    <div>公司众多一流人才的深层磨合，对最前沿技术的探讨接纳精神，使我们能够保证为你提供最专业的应用，最专业的服务。</div>
                </div>
                <div class="item-support">
                    <p>——完善、快速的售后服务：</p>
                    <div>以最快的速度、最有效的方法、最先进的技术保障系统的效果发挥到极至，解除您的后顾之忧。</div>
                </div>
            </div>
            <div class="item">
                <h1>企业文化</h1>
                <div class="item-culture">
                    <p>1、服务至上</p>
                    <div>我们将以每一位客户的业务需求为导向，从客户利益最大化出发，制定并提供最完善的信息化应用解决方案，并尊重客户提出的一切修改意见，及时加以完善。</div>
                </div>
                <div class="item-culture">
                    <p>2、技术创新</p>
                    <div>应用软件开发是一个时刻都在进步的创新型领域，公司鼓励每一位技术型人才提出创造性的建设意见，并努力学习接受新型技术，公司提供富于挑战性的事业发展空间，希望每一个技术人才都能用将自己最大化的价值体现出来，为公司整体的发展做出更好的贡献。</div>
                </div>
                <div class="item-culture">
                    <p>3、团队合作</p>
                    <div>一个公司是否能够持续稳定发展，除了自身行业发展前景外，更重要的是取决于是否拥有一支敢打敢拼、有勇有识的团队。公司始终坚持营造团队间互相尊重、相互理解沟通的工作氛围，追求1+1>2的工作效应，公司拥有良好的员工激励关爱制度，定期开展团建，增进团队凝聚力。</div>
                </div>
            </div>
            <div class="icon">
                <div class="icon-pic">
                    <img src="../../assets/1.png" alt="">
                    <span>领先</span>
                </div>
                <div class="icon-pic">
                    <img src="../../assets/2.png" alt="">
                    <span>系统</span>
                </div>
                <div class="icon-pic">
                    <img src="../../assets/3.png" alt="">
                    <span>安全</span>
                </div>
                <div class="icon-pic">
                    <img src="../../assets/4.png" alt="">
                    <span>快速</span>
                </div>
            </div>
            <div class="item">
                <h1>我们的团队</h1>
                <div class="item-team">
                    <div class="item-team-peo">
                        <img src="../../assets/per_1.png" alt="">
                        <div class="name">小悠悠</div>
                        <div class="des">他正直热忱，热心地关注鲁迅的学习，与当时日本学生对中国留学生的鄙视态度形成鲜明的对比。</div>
                    </div>
                    <div class="item-team-peo">
                        <img src="../../assets/per_2.png" alt="">
                        <div class="name">隔壁王</div>
                        <div class="des">你只看到别人在表面上活得春风得意，却不知道人家在背后也过得也风生水起。</div>
                    </div>
                    <div class="item-team-peo">
                        <img src="../../assets/per_3.png" alt="">
                        <div class="name">彭于晏</div>
                        <div class="des">漂亮的女人像是放在展柜里的工艺品，欣赏的人很多，但买下的人只能一个人。</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">CELL NETWORK FOUNDATION LTD.</div>
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

    }
}
</script>

<style lang="scss">
    .index {
        .header {
            display: flex;
            align-items: center;
            height: 70px;
            img:nth-child(1) {
                width: 47px;
                height: 47px;
                margin: 0 20px 0 20%;
            }
            img:nth-child(2) {
                height: 25px;
            }
        }
        .banner {
            img {
                display: block;
                width: 100%;
                height: 360px;
            }
        }
        .content {
            box-sizing: border-box;
            padding-top: 44px;
            .item {
                width: 60%;
                margin: 0 auto 30px;
                h1 {
                    text-align: center;
                    color: #FF5D4E;
                    font-size: 25px;
                    padding-bottom: 20px;
                }
                .item-info {
                    color: #666666;
                    font-size: 14px;
                    line-height: 26px;
                }
                .item-support {
                    color: #666666;
                    font-size: 12px;
                    margin-bottom: 24px;
                    p {
                        color: #333333;
                        font-size: 16px;
                        margin-bottom: 16px;
                    }
                }
                .item-culture {
                    background-color: #F7F7F7;
                    padding: 13px;
                    margin-bottom: 25px;
                    font-size: 16px;
                    color: #585858;
                    line-height: 26px;
                    p {
                        position: relative;
                        margin-bottom: 18px;
                    }
                    p:before {
                        content: "";
                        position: absolute;
                        display: block;
                        left: 0;
                        top: 30px;
                        width: 25px;
                        height: 0;
                        border-top: 3px solid #FF5D4E;
                    }
                }
                .item-team {
                    display: flex;
                    justify-content: space-around;
                    margin-top: 26px;
                    .item-team-peo {
                        box-sizing: border-box;
                        margin: 0 2%;
                        padding: 0 2%;
                        width: 30%;
                        img {
                            display: block;
                            width: 90px;
                            height: 90px;
                            margin: 0 auto;
                        }
                        .name {
                            width: 100%;
                            color: #333333;
                            text-align: center;
                            font-size: 25px;
                            line-height: 50px;
                        }
                        .des {
                            text-align: center;
                            color: #666666;
                            font-size: 12px;
                        }
                    }
                }
            }
            .icon {
                box-sizing: border-box;
                width: 60%;
                margin: 30px auto 50px;
                padding: 0 4%;
                display: flex;
                justify-content: space-around;
                .icon-pic {
                    img {
                        display: block;
                        width: 60px;
                        height: 60px;
                    }
                    span {
                        display: block;
                        width: 100%;
                        text-align: center;
                        line-height: 40px;
                        color: #333333;
                    }
                }
            }
        }
        .footer {
            height: 63px;
            line-height: 63px;
            color: #ffffff;
            text-align: center;
            font-size: 15px;
            background:linear-gradient(315deg,rgba(77,21,40,1) 0%,rgba(23,44,77,1) 100%);
        }
    }
</style>
