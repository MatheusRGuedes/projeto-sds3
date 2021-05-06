import Chart from 'react-apexcharts';

/* Componente para representar o grafico de rosca */

const DonutsChart = () => {
    
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    
    return (
        //macete dentro das chaves: os 3 pontos pega o objeto, e em seguida é incorporado mais propriedades
        //series são os dados das categorias em array
        <Chart options={{ ...options, labels: mockData.labels}} 
               series={mockData.series}
               type="donut"
               height="240"
        />
    );
}

export default DonutsChart;