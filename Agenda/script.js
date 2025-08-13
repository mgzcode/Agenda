$(function(){
  

function pegaContatos (id,descr){
    $.ajax({
        type: 'post',
        data:{idSetor:id},
        dataType:'json',
        url:'app/getContatos.php',
        success:function takeContatos(retorno){
            $(" #tableContatos tbody tr").remove();
            var str = '';
            for(var indice  in retorno){
                var nome = retorno[indice].nome;
                var ramal = retorno[indice].ramal;

                str += "<tr>";
                str += "<td>"+descr+"</td>";
                str += "<td>"+nome+"</td>";
                str += "<td>"+ramal+"</td>";
                str += "</tr>";

            }
            $(" #tableContatos tbody").append(str);


        },error: function erro (x1,x2,x3){

        }
    })
}

function filtraContatos (texto){
    var tamanhoPesquisa = texto.length;

// 
    $(" #tableContatos tbody tr").each(function(){
        if ($(this).children('td').eq(1).text().toUpperCase().substr(0,tamanhoPesquisa) != texto.toUpperCase()) {
            $(this).hide();
        }else{
            $(this).show();
        }
    });

}