$(function(){
    //获取新闻列表数据函数
    function getNews() {
        $.get('http://www.liulongbin.top:3006/api/cmtlist',function(res){
            if (res.status !== 200) {
                return alert('获取列表失败')

            }
            console.log(res)
            // 调用模板
            var htr = template('tpl-news',res)
            //渲染到页面
            $('#news-list').html(htr)

        })
    }
    //调用新闻列表
    getNews()

})