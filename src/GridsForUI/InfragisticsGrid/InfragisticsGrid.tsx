import { IgrDataGrid, IgrTextColumn} from 'igniteui-react-grids';


const products = [
    { Symbol: 'GOOG', Side: 'Buy', Broker: 'Steve', OrderStatus: 'New', Status: '10000', OrderQty: 2, Cumulative: '-', OrderType: 'Buy', Account: 'Account 1' },
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

export default function InfragisticsGrid() {



    return (
        <div className="container">
     

            <IgrDataGrid

                height="calc(100% - 40px)"
                width="100%"
                columnResizingAnimationMode="Interpolate"
                columnResizingMode="Deferred"
                columnResizingSeparatorWidth={1}
                autoGenerateColumns={false}
                defaultColumnMinWidth={100}
                dataSource={products}
                isColumnOptionsEnabled="true">

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



