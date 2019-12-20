="
<script>

$(document).ready(function(){

    var identificacao = '#"+[Quantidade de Transações]+[Número da Agência]+[Número do Produto]+[Número do Tipo de Ação do Usuário]+FormatoData([Data]; "dMMyyyy")+"'.replace('.','');
    


    $(identificacao).click(function(){
        console.log('teste');
        var scnwidth = (screen.width) - 5;
        var scnheight = screen.height;
        var width = 1200;
        var height = 900;
        var link_bo = window.location.href;
        var link_bo_split = link_bo.split('BOE/');
        var opendoc = link_bo_split[0]+'BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=FibW8123EgEA4A4AAADnWdYTAFBWjghR&sRefresh=Y&lsSagencia="+[Número da Agência]+"&lsSdata="+[Data]+"&lsSproduto="+[Número do Produto]+"&lsSacao="+[Tipo de Ação do Usuário]+"'
        var left = -5;
        var top = 99;

  window.open( opendoc ,'OpenDocument', 'width='+scnwidth+', height='+height+', top='+top+', left='+left+', scrollbars=no, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no');


    });

});

</script>

<a class='detalhes_pointer'  id='"+FormatoNúmero([Quantidade de Transações];"#")+FormatoNúmero([Número da Agência];"#")+FormatoNúmero([Número do Produto];"#")+FormatoNúmero([Número do Tipo de Ação do Usuário];"#")+FormatoData([Data]; "dMMyyyy")+"'>Detalhes</a>

"
