/**
 * Script principal do portfólio
 * Funções para interatividade básica
 */

// Destacar link ativo no menu
document.addEventListener('DOMContentLoaded', function() {
    // Obtém a página atual
    const currentPage = window.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('nav ul li a');
    
    // Adiciona classe 'active' ao item do menu correspondente
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
    
    // Simular envio do formulário de contato
    const formContato = document.getElementById('formContato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Exibe mensagem de sucesso
            alert('Obrigado por sua mensagem, Thalles entrará em contato em breve!');
            
            // Limpa o formulário
            formContato.reset();
        });
    }
    
    // Efeito de hover nos projetos
    const projetos = document.querySelectorAll('.projeto');
    projetos.forEach(projeto => {
        projeto.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        
        projeto.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
});