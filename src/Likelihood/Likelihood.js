import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Likelihood = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = 'http://127.0.0.1:5000/api/data'; // API URL variable

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const renderChart = () => {
      const ctx = document.getElementById('likelihoodChart');
      
      // Destroy existing Chart instance if it exists
      if (Chart.getChart(ctx)) {
        Chart.getChart(ctx).destroy();
      }
      
      // Render new Chart instance
      if (data) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.map(item => ` ${item.likelihood}`),
            datasets: [
                {
                    label: 'Likelihood',
                    data: data.map(item => item.likelihood),
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    };

    renderChart();

  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <canvas id="likelihoodChart" width="200" height="200"></canvas>
    </div>
  );
};

export default Likelihood;
