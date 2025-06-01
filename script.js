document.addEventListener('DOMContentLoaded', function() {
    const infoBotao = document.getElementById('infoBotao');
    const infoAdicionalDiv = document.getElementById('infoAdicional');

    // Texto dos benefícios ATUALIZADO para o novo design
    const beneficiosTexto = `
        <h3>Principais Benefícios do PortfolioHUB:</h3>
        <ul>
            <li><strong>Integração Completa:</strong> Conecte-se facilmente com Google Workspace (Drive para armazenamento, Calendar para sincronização) e outras ferramentas.</li>
            <li><strong>Controle de Versão com Git/GitHub:</strong> Integre seus repositórios para versionamento e compartilhamento de código diretamente na plataforma.</li>
            <li><strong>Gestão de Usuários e Segurança:</strong> Configure e gerencie usuários através do Google Workspace e implemente políticas de segurança robustas.</li>
            <li><strong>Centralização e Organização:</strong> Tenha todos os seus projetos e portfólios digitais acessíveis e organizados em um único local.</li>
            <li><strong>Documentação e Suporte:</strong> Processo de implantação e uso facilitado, com possibilidade de apoio via IA (como esta interação!).</li>
            <li><strong>Colaboração Eficaz:</strong> Ferramentas e práticas que promovem a colaboração em seus projetos.</li>
        </ul>
        <p class="final-note">Transforme a gestão dos seus projetos com o PortfolioHUB!</p>
    `;

    infoBotao.addEventListener('click', function() {
        if (infoAdicionalDiv.classList.contains('info-escondida')) {
            infoAdicionalDiv.innerHTML = beneficiosTexto;
            infoAdicionalDiv.classList.remove('info-escondida');
            infoBotao.textContent = 'Ocultar Benefícios';
        } else {
            infoAdicionalDiv.classList.add('info-escondida');
            infoAdicionalDiv.innerHTML = '';
            infoBotao.textContent = 'Descubra os Benefícios';
        }
    });
});