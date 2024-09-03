class Car {
    constructor(public make: string, public model: string) {}
  }
  
  // Utilizando o utilitário InstanceType para capturar o tipo de instância da classe Car
  type CarInstance = InstanceType<typeof Car>;
  
  // Exemplo de uso:
  const carInstance: CarInstance = new Car('Toyota', 'Corolla'); // válido
  
  // As propriedades de 'carInstance' são tipadas corretamente conforme a classe Car
  console.log(carInstance.make);  // 'Toyota'
  console.log(carInstance.model); // 'Corolla'
  
  // Tentativa de criar uma instância com tipo incorreto gerará um erro
  // const invalidCarInstance: CarInstance = { make: 'Toyota' }; // Erro: 'model' é necessário
  