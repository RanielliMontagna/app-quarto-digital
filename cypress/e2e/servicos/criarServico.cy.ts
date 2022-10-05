context('Adiciona um serviço', () => {
  beforeEach(() => {
    // Navega para a página de login
    cy.visit('http://localhost:3000/login');

    // preenche o campo de email com nome "email"
    cy.get('[name="email"]').type('contato@ranimontagna.com');

    // preenche o campo de senha com nome "password"
    cy.get('[name="password"]').type('a1s2d3');

    // clica no botão de submit
    cy.get('button[type="submit"]').click();

    // espera a página de dashboard ser carregada
    cy.url().should('include', '/dashboard');
  });

  it('Cria serviço', () => {
    // redireciona para pagina de serviços
    cy.visit('http://localhost:3000/servicos');

    // clica no botão de adicionar serviço
    cy.get('button').contains('Novo serviço').click();

    // preenche o campo de nome com nome "nome"
    cy.get('[id="nome"]').type('Serviço de teste');

    // preenche o campo de descrição com nome "preço"
    cy.get('[id="preco"]').type('10.00');

    // clica no botão de submit
    cy.get('button[type="submit"]').click();
  });
});

