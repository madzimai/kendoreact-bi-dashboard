// src/components/Dashboard.jsx
import React, { useState } from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import { Card, CardHeader, CardTitle, CardBody } from '@progress/kendo-react-layout';
import '@progress/kendo-theme-default/dist/all.css';


const salesData = [
  { month: 'Jan', sales: 35000, expenses: 22000, profit: 13000 },
  { month: 'Feb', sales: 42000, expenses: 24000, profit: 18000 },
  { month: 'Mar', sales: 45000, expenses: 25000, profit: 20000 },
  { month: 'Apr', sales: 50000, expenses: 26000, profit: 24000 },
  { month: 'May', sales: 55000, expenses: 27000, profit: 28000 },
  { month: 'Jun', sales: 60000, expenses: 28000, profit: 32000 },
];

const productData = [
  { id: 1, name: 'Product A', category: 'Electronics', stock: 150, price: 799 },
  { id: 2, name: 'Product B', category: 'Clothing', stock: 230, price: 49.99 },
  { id: 3, name: 'Product C', category: 'Electronics', stock: 75, price: 1299 },
  { id: 4, name: 'Product D', category: 'Home', stock: 200, price: 99.99 },
  { id: 5, name: 'Product E', category: 'Clothing', stock: 180, price: 29.99 },
];

const categories = ['All', 'Electronics', 'Clothing', 'Home'];

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [range, setRange] = useState({
    start: new Date(2023, 0, 1),
    end: new Date(2023, 5, 30),
  });

  const filteredProducts = selectedCategory === 'All' 
    ? productData 
    : productData.filter(product => product.category === selectedCategory);

  return (
    <div className="dashboard-container" style={{ padding: '20px' }}>
      <h1>Business Intelligence Dashboard</h1>
      
      <div className="filters" style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div>
          <label>Category: </label>
          <DropDownList
            data={categories}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.value)}
          />
        </div>
        <div>
          <label>Date Range: </label>
          <DateRangePicker
            value={range}
            onChange={(e) => setRange(e.value)}
          />
        </div>
      </div>
      
      <div className="dashboard-content" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardBody>
            <Chart style={{ height: 300 }}>
              <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={salesData.map(item => item.month)} />
              </ChartCategoryAxis>
              <ChartSeries>
                <ChartSeriesItem type="column" data={salesData.map(item => item.sales)} name="Sales" />
                <ChartSeriesItem type="column" data={salesData.map(item => item.expenses)} name="Expenses" />
                <ChartSeriesItem type="line" data={salesData.map(item => item.profit)} name="Profit" />
              </ChartSeries>
            </Chart>
          </CardBody>
        </Card>
        
        <Card style={{ width: '100%' }}>
          <CardHeader>
            <CardTitle>Product Inventory</CardTitle>
          </CardHeader>
          <CardBody>
            <Grid data={filteredProducts}>
              <GridColumn field="id" title="ID" width="50px" />
              <GridColumn field="name" title="Product Name" />
              <GridColumn field="category" title="Category" />
              <GridColumn field="stock" title="Stock" />
              <GridColumn field="price" title="Price" format="{0:c}" />
            </Grid>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;