import Chart from 'react-apexcharts';

/* Componente para representar o grafico de barras */

const BarChart = () => {
    
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };
    
    return (
        //macete dentro das chaves: os 3 pontos pega o objeto, e em seguida é incorporado mais propriedades
        //series são os dados das categorias em array
        <Chart options={{ ...options, xaxis: mockData.labels}} 
               series={mockData.series}
               type={"bar"}
               height={"240"}
        />
    );
}

export default BarChart;