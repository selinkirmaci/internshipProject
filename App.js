import React, { useState } from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerContent} from "@react-navigation/drawer";

import TeacherInfo from './TeacherInfo';
import WelcomePage from "./teramobil/WelcomePage";
import LoginForm from "./teramobil/LoginForm";
import HomepageUI from "./teramobil/HomepageUI"
import BelediyePage from "./teramobil/BelediyePage/BelediyePage";
import MahallePage from "./teramobil/MahallePage";
import PersonelPage from "./teramobil/PersonelPage/PersonelPage";
import MaliPage from "./teramobil/MaliPage/MaliPage";
import Homepage2 from "./teramobil/Homepage/Homepage2";
import PersonelNumbersPage from "./teramobil/PersonelPage/PersonelNumbersPage";
import PersonelMaliyetPage from "./teramobil/PersonelPage/PersonelMaliyetPage";
import MüdürlükPersonelSayılarıPage from "./teramobil/MüdürlükPersonelSayılarıPage";
import PersonelAramaPage from "./teramobil/PersonelPage/PersonelAramaPage";
import MazaretPage from "./teramobil/PersonelPage/MazeretPage";
import İzinliPage from "./teramobil/PersonelPage/İzinliPage";
import MüdürlükPage from "./teramobil/ManagementPage/MüdürlükPage";
import TahsilatlarPage from "./teramobil/MaliPage/TahsilatlarPage";
import AmountPage from "./teramobil/MaliPage/AmountPage";
import DebtPage from "./teramobil/MaliPage/DebtPage";
import TahsilatTürPage from "./teramobil/MaliPage/TahsiletTürPage";
import ÖdemelerPage from "./teramobil/MaliPage/ÖdemelerPage";
import GündemHomepage from "./teramobil/GündemPage/GündemHomepage";
import ActivityPage from "./teramobil/GündemPage/ActivityPage";
import AppoinmentPage from "./teramobil/GündemPage/AppoinmentPage";
import MessageToMayorPage from "./teramobil/GündemPage/MessageToMayorPage";
import DailyProgramPage from "./teramobil/GündemPage/DailyProgramPage";
import NotesPage from "./teramobil/GündemPage/NotesPage";
import MayorVisitsPage from "./teramobil/GündemPage/MayorVisitsPage";
import {Dimensions} from "react-native";
import ActivityCalendar from "./teramobil/GündemPage/ActivityCalendar";
import PazarYeriİptalPage from "./teramobil/PolicePage/PazarYeriİptalPage";
import PazarYeriTahsilatPage from "./teramobil/PolicePage/PazarYeriTahsilatPage";
import PoliceHomepage from "./teramobil/PolicePage/PoliceHomepage";
import IhalePage from "./teramobil/ProjectPage/IhalePage";
import ProjectPage from "./teramobil/ProjectPage/ProjectPage";
import StrategyPlanPage from "./teramobil/ProjectPage/StrategyPlanPage";
import ProjectHomepage from "./teramobil/ProjectPage/ProjectHomepage";
import ServiceHomepage from "./teramobil/ServicePage/ServiceHomepage";
import BaşvurularPage from "./teramobil/ServicePage/BaşvurularPage";
import BaşvuruTakipPage from "./teramobil/ServicePage/BaşvuruTakipPage";
import ZabıtaVarakalarıPage from "./teramobil/ServicePage/ZabıtaVarakalarıPage";
import WaterHomepage from "./teramobil/WaterPage/WaterHomepage";

const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Drawer2 = createDrawerNavigator();

const ManageDrawer = () => {
    const {width} = Dimensions.get('window').width;

    return(
        <Drawer.Navigator drawerContent={props => <HomepageUI{...props}/>} drawerStyle={{width:370}}>
                <Drawer.Screen name="Homepage2" component={Homepage2}/>
                <Drawer.Screen name="TeacherInfo" component={TeacherInfo}/>
                <Drawer.Screen name="BelediyePage" component={BelediyePage}/>
                <Drawer.Screen name="MahallePage" component={MahallePage}/>
                <Drawer.Screen name="PersonelPage" component={PersonelPage}/>
                <Drawer.Screen name="MaliPage" component={MaliPage}/>
                <Drawer.Screen name="PersonelNumbersPage" component={PersonelNumbersPage}/>
                <Drawer.Screen name="PersonelMaliyetPage" component={PersonelMaliyetPage}/>
                <Drawer.Screen name="MüdürlükPersonelSayılarıPage" component={MüdürlükPersonelSayılarıPage}/>
                <Drawer.Screen name="PersonelAramaPage" component={PersonelAramaPage}/>
                <Drawer.Screen name="MazaretPage" component={MazaretPage}/>
                <Drawer.Screen name="İzinliPage" component={İzinliPage}/>
                <Drawer.Screen name="MüdürlükPage" component={MüdürlükPage}/>
                <Drawer.Screen name="TahsilatlarPage" component={TahsilatlarPage}/>
                <Drawer.Screen name="AmountPage" component={AmountPage}/>
                <Drawer.Screen name="ÖdemelerPage" component={ÖdemelerPage}/>
                <Drawer.Screen name="DebtPage" component={DebtPage}/>
                <Drawer.Screen name="TahsilatTürPage" component={TahsilatTürPage}/>
                <Drawer.Screen name="ActivityPage" component={ActivityPage}/>
                <Drawer.Screen name="AppoinmentPage" component={AppoinmentPage}/>
                <Drawer.Screen name="MessageToMayorPage" component={MessageToMayorPage}/>
                <Drawer.Screen name="DailyProgramPage" component={DailyProgramPage}/>
                <Drawer.Screen name="NotesPage" component={NotesPage}/>
                <Drawer.Screen name="MayorVisitsPage" component={MayorVisitsPage}/>
                <Drawer.Screen name="GündemHomepage" component={GündemHomepage}/>
                <Drawer.Screen name="ActivityCalendar" component={ActivityCalendar}/>
                <Drawer.Screen name="PazarYeriİptalPage" component={PazarYeriİptalPage}/>
                <Drawer.Screen name="PazarYeriTahsilatPage" component={PazarYeriTahsilatPage}/>
                <Drawer.Screen name="PoliceHomepage" component={PoliceHomepage}/>
                <Drawer.Screen name="IhalePage" component={IhalePage}/>
                <Drawer.Screen name="ProjectPage" component={ProjectPage}/>
                <Drawer.Screen name="StrategyPlanPage" component={StrategyPlanPage}/>
                <Drawer.Screen name="ProjectHomepage" component={ProjectHomepage}/>
                <Drawer.Screen name="ServiceHomepage" component={ServiceHomepage}/>
                <Drawer.Screen name="BaşvurularPage" component={BaşvurularPage}/>
                <Drawer.Screen name="BaşvuruTakipPage" component={BaşvuruTakipPage}/>
                <Drawer.Screen name="ZabıtaVarakalarıPage" component={ZabıtaVarakalarıPage}/>
                <Drawer.Screen name="WaterHomepage" component={WaterHomepage}/>
        </Drawer.Navigator>
    );
}

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const App2 = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: "horizontal"
            }}
                headerMode='float'
                animation='fade'
            >
                <AuthStack.Screen name="Welcome" component={WelcomePage}  options={{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}/>
                <AuthStack.Screen name="Login" component={LoginForm}  options={{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}/>
                <AuthStack.Screen name="Homepage" component={ManageDrawer}/>
            </AuthStack.Navigator>
        </NavigationContainer>


    );
};
export default App2;