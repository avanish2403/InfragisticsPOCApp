import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrImageColumn, IgrTemplateColumn } from "igniteui-react-grids";
import { IgrTextColumn } from "igniteui-react-grids";
import { IgrNumericColumn } from "igniteui-react-grids";
import { IgrDateTimeColumn } from "igniteui-react-grids";
import { IgrDataGridModule } from "igniteui-react-grids";
import { IgrDataGrid } from "igniteui-react-grids";
import { IgrDataGridToolbarModule } from "igniteui-react-grids";
import { IgrDataGridToolbar } from "igniteui-react-grids";
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrDataGridToolbarModule.register();
IgrGridColumnOptionsModule.register();

const products = [
    { Symbol: 'GOOG', Side: 'Buy', Broker: 'Steve', OrderStatus: 'New', OrderQty: 2, Cumulative: '-', OrderType: 'Buy', Account: 'Account 1' },
    { Symbol: 'GOOG', Side: 'Sell', Broker: 'John', OrderStatus: 'New', OrderQty: 3, Cumulative: '-', OrderType: 'Sell', Account: 'Account 2' },
    { Symbol: 'GOOG', Side: 'Buy', Broker: 'Alex', OrderStatus: 'New', OrderQty: 4, Cumulative: '-', OrderType: 'Buy', Account: 'Account 3' },
    { Symbol: 'GOOG', Side: 'Sell', Broker: 'Smith', OrderStatus: 'New', OrderQty: 5, Cumulative: '-', OrderType: 'Sell', Account: 'Account 1' },
    { Symbol: 'GOOG', Side: 'Buy', Broker: 'Harry', OrderStatus: 'New', OrderQty: 6, Cumulative: '-', OrderType: 'Buy', Account: 'Account 2' },
    { Symbol: 'GOOG', Side: 'Sell', Broker: 'Johnson', OrderStatus: 'New', OrderQty: 7, Cumulative: '-', OrderType: 'Sell', Account: 'Account 3' },
    { Symbol: 'GOOG', Side: 'Buy', Broker: 'Peter', OrderStatus: 'New', OrderQty: 8, Cumulative: '-', OrderType: 'Buy', Account: 'Account 1' },
    { Symbol: 'GOOG', Side: 'Sell', Broker: 'David', OrderStatus: 'New', OrderQty: 4, Cumulative: '-', OrderType: 'Sell', Account: 'Account 2' },
    { Symbol: 'AAPL', Side: 'Buy', Broker: 'Steve', OrderStatus: 'New', OrderQty: 2, Cumulative: '-', OrderType: 'Buy', Account: 'Account 1' },
    { Symbol: 'AAPL', Side: 'Sell', Broker: 'John', OrderStatus: 'New', OrderQty: 3, Cumulative: '-', OrderType: 'Sell', Account: 'Account 2' },
    { Symbol: 'AAPL', Side: 'Buy', Broker: 'Alex', OrderStatus: 'New', OrderQty: 4, Cumulative: '-', OrderType: 'Buy', Account: 'Account 3' },
    { Symbol: 'AAPL', Side: 'Sell', Broker: 'Smith', OrderStatus: 'New', OrderQty: 5, Cumulative: '-', OrderType: 'Sell', Account: 'Account 1' },
    { Symbol: 'AAPL', Side: 'Buy', Broker: 'Harry', OrderStatus: 'New', OrderQty: 6, Cumulative: '-', OrderType: 'Buy', Account: 'Account 2' },
    { Symbol: 'AAPL', Side: 'Sell', Broker: 'Johnson', OrderStatus: 'New', OrderQty: 7, Cumulative: '-', OrderType: 'Sell', Account: 'Account 3' },
    { Symbol: 'AAPL', Side: 'Buy', Broker: 'Peter', OrderStatus: 'New', OrderQty: 8, Cumulative: '-', OrderType: 'Buy', Account: 'Account 1' },
    { Symbol: 'AAPL', Side: 'Sell', Broker: 'David', OrderStatus: 'New', OrderQty: 4, Cumulative: '-', OrderType: 'Sell', Account: 'Account 2' }

];

export default class DataGridColumnChooserToolbar extends React.Component<any, any> {

  public data: any[];
  public grid: IgrDataGrid;
  public toolbar: IgrDataGridToolbar;

  constructor(props: any) {
    super(props);

    this.state = { componentVisible: true };
    // this.data = DataGridSharedData.getSales();
  }

  public onGridRef = (grid: IgrDataGrid) => {
    this.grid = grid;
    if (this.toolbar) {
      this.toolbar.targetGrid = this.grid;
    }
  }


  public onToolbarRef = (toolbar: IgrDataGridToolbar) => {
    this.toolbar = toolbar;
    if (this.toolbar) {
      this.toolbar.targetGrid = this.grid;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
          <IgrDataGridToolbar
            ref={this.onToolbarRef}
            toolbarTitle="Blotter"
            columnChooser="true"
          />
          <IgrDataGrid
            ref={this.onGridRef}
            height="calc(100% - 2rem)"
            width="100%"
            autoGenerateColumns="false"
            cornerRadiusTopLeft="0"
            cornerRadiusTopRight="0"
            isColumnOptionsEnabled="true"
            dataSource={products}
            isGroupCollapsable="true"
            groupHeaderDisplayMode = "combined"       
            isGroupByAreaVisible="true"
            filterUIType="FilterRow"
          >

                <IgrTextColumn field="Symbol" horizontalAlignment="center" />
                <IgrTextColumn field="Side" horizontalAlignment="center" />
                <IgrTextColumn field="Broker" horizontalAlignment="center" />
                <IgrTextColumn field="OrderStatus" horizontalAlignment="center" />
                {/* <IgrTemplateColumn field="OrderStatus" headerText="OrderStatus" horizontalAlignment="center"
                    paddingLeft="10" paddingRight="0"
                         width="*>180"/> */}
                <IgrTextColumn field="OrderQty" horizontalAlignment="center" />
                <IgrTextColumn field="Cumulative" horizontalAlignment="center" />
                <IgrTextColumn field="OrderType" horizontalAlignment="center" />
                <IgrTextColumn field="Account" horizontalAlignment="center" />
          </IgrDataGrid>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridColumnChooserToolbar/>);