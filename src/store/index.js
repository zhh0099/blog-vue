import { createStore } from 'vuex'

export default createStore({
    state: {
        name: 'blog',
        searchFlag: false,
        drawerFlag: false,
        loginFlag:false,
        homeBackground: require('@/assets/img/img-5.jpg'),
        recordBackground: require('@/assets/img/img-1.jpg'),
        classBackground:require('@/assets/img/img-2.jpg'),
        tagBackground:require('@/assets/img/img-3.jpg'),
        albumBackground:require('@/assets/img/img-9.png'),
        talkBackground:require('@/assets/img/img-6.jpg'),
        linkBackground:require('@/assets/img/img-12.jpg'),
        aboutBackground:require('@/assets/img/img-4.jpg'),
        messageBackground:require('@/assets/img/img-12.jpg'),
        userName: '谁是Moon',
        userInfo: '一切都有代价',
        userImg: require('@/assets/img/userAvator.jpg'),
        qq: '965489865',
        github: 'https://github.com/NitianZhang',
        gitee: 'https://gitee.com/z12349040',
        words: '种一棵树最好的时间是十年前，其次是现在。',
        articleCount: 9,
        articleCover: require('@/assets/img/img-3.jpg'),
        articleTitle: '文章标题',
        articleTime: '2022-05-02',
        articleContents:'月亮与六便士俘获斯特里克兰的狂热是一种对美的创作激情，让他片刻不得安宁，驱策着他东奔西走。他就像一个不知疲倦的朝圣者，会永远向着让他魂牵梦绕的圣地前进，附在他身上的魔鬼却毫无怜悯之心。有些人追求真理的愿望非常强烈，为了达到目的，就算把他的生活彻底颠覆也在所不惜。斯特里克兰就是这样的人，只不过他追求的是美，而不是真理，我打心眼里同情他。',
        articleContent:
            '<div class="js-toc"><h1 id="0">月亮与六便士</h1><p>俘获斯特里克兰的狂热是一种对美的创作激情，让他片刻不得安宁，驱策着他东奔西走。他就像一个不知疲倦的朝圣者，会永远向着让他魂牵梦绕的圣地前进，附在他身上的魔鬼却毫无怜悯之心。有些人追求真理的愿望非常强烈，为了达到目的，就算把他的生活彻底颠覆也在所不惜。斯特里克兰就是这样的人，只不过他追求的是美，而不是真理，我打心眼里同情他。</p><p>夜晚是那样的美，仿佛你的灵魂都无法忍受身体的束缚，感觉它随时都会在缥缈的天空中游荡而去，死神的面容如同挚友一样熟悉。</p><p>人类天生具有制造神话的特性，对于那些出类拔萃的人物，人们对发生在他们身上的奇闻逸事往往好奇心极强，编造出一个个传奇故事，然后对此深信不疑，达到近乎狂热的地步。这其实是浪漫主义对平庸生活的一种抗议。</p><h1 id="1">在细雨中呼喊</h1><p>生的终止不过一场死亡，死的意义不过在于重生或永眠。死亡不是失去生命，而是走出时间。</p><p>现在眼前经常会出现模糊的幻觉，我似乎能够看到时间的流动。时间呈现为透明的灰暗,所有一切都包孕在这隐藏的灰暗之中。我们并不是生活在土地上,事实上我们生活在时间里。田野、街道、河流、房屋是我们置身时间之中的伙伴。时间将我们推移向前或者向后，并且改变着我们的模样。</p><p>我的弟弟最后一次从水里挣扎着露出头来时，睁大双眼直视耀眼的太阳，持续了好几秒钟，直到他被最终淹没。几天以后的中午，弟弟被埋葬后，我坐在阳光灿烂的池塘旁，也试图直视太阳，然而耀眼的光芒使我立刻垂下了眼睛。于是我找到了生与死之间的不同，活着的人是无法看清太阳的，只有临死之人的眼睛才能穿过光芒看清太阳。</p><h1 id="2">一句顶一万句</h1><p>我活了七十岁，明白一个道理，世上别的东西都能挑，就是日子没法挑。我还看穿一件事，过日子是过以后，不是过从前。</p><p>人互相一有隔阂，对方便无做得对的地方；同做一件事，本来是为对方考虑，对方也把你想成了另有想法。</p></div>',
        categoryCount: 9,
        categoryName: '文章类别',
        tagCount: 9,
        tagName: '文章标签',
        websiteNotice: '公告模块测试。。。公告模块测试。。。。公告模块测试。。。公告模块测试。。。',
        viewsCount: 0,
    },
    mutations: {
        DrawerNegate(context) {
            context.drawerFlag = !context.drawerFlag
        },
        LoginNegate(context){
            context.loginFlag = !context.loginFlag
            console.log(context.loginFlag);
        },
        DrawerFalse(context){
            context.drawerFlag =false;
            
        }
    },
})
