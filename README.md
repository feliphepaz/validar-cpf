# Validar CPF

Plugin simples idealizado apenas para estudos de Regex. Nele se tem três métodos: 

### um que valida o CPF;
~~~javascript
var cpf = new handleCPF(value);
cpf.validar 
// Aqui entra o Regex para descobrir se o valor passado no input corresponde ou não a um CPF válido.
~~~

### outro que formata;
~~~javascript
var cpf = new handleCPF(value);
cpf.formatar 
// Formata o que é passado no campo em um modelo padrão de CPF (XXX.XXX.XXX-XX).
~~~


### e um que limpa.
~~~javascript
var cpf = new handleCPF(value);
cpf.limpar 
// Ignora qualquer tipo de pontuação ou espaço no input para transformar o valor apenas em números.
~~~
<br>

**OBS**: Mesmo que sejam métodos, as funções são ativadas como propriedades pois as mesmas possuem o comportamento de Get em sua classe, para que não seja possível mudar os seus valores.
