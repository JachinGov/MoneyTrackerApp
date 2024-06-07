import { FlatList, Text, View, StyleSheet } from "react-native";
import ExpensesSummmary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constans/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Nike shoes',
        amount: 2500.00,
        date: new Date('2024-06-06')
    },
    {
        id: 'e2',
        description: 'Fishing rod',
        amount: 2800.00,
        date: new Date('2024-06-07')
    },
    {
        id: 'e3',
        description: 'Fishing reel',
        amount: 8000.00,
        date: new Date('2024-06-08')
    },
    {
        id: 'e4',
        description: 'Bait',
        amount: 59.99,
        date: new Date('2024-06-09')
    },
    {
        id: 'e5',
        description: 'Bottle water',
        amount: 14.99,
        date: new Date('2024-06-09')
    },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummmary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    },
});