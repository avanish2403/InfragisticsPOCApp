import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
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

export default class DataGridRowGrouping extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);
        // this.data = DataGridSharedData.getEmployees(50);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDataGrid
                    height="calc(100% - 39px)"
                    width="100%"
                    autoGenerateColumns="false"
                    isGroupCollapsable="true"
                    groupHeaderDisplayMode = "combined"
                    dataSource={products}
                    isColumnOptionsEnabled="true"
                    isGroupByAreaVisible="true">
                        <IgrTextColumn field="Symbol" horizontalAlignment="center" />
                <IgrTextColumn field="Side" horizontalAlignment="center" />
                <IgrTextColumn field="Broker" horizontalAlignment="center" />
                <IgrTextColumn field="OrderStatus" horizontalAlignment="center" />
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
root.render(<DataGridRowGrouping/>);
