document.addEventListener("DOMContentLoaded", function () {
  // Datos
  const data = {
    x: ["1/2022", "2/2022", "3/2022", "4/2022", "1/2023", "2/2023", "3/2023"],
    y: [
      5.58250205911961, 8.552583895049647, 24.260197280725137,
      45.80152671755726, 13.089272931792618, 20.326784672242756,
      26.65615141955836,
    ],
  };

  // Configuración del gráfico
  const config = {
    type: "line",
    data: {
      labels: data.x,
      datasets: [
        {
          label: "Datos",
          data: data.y,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
  };

  // Obtener el contexto del lienzo
  const ctx = document.getElementById("myChart").getContext("2d");

  // Crear el gráfico
  const myChart = new Chart(ctx, config);
});
