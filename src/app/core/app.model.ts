//import { TimeFrameRange, SamplingMethod } from "../time-frame/time-frame.model";
import * as moment from 'moment';
import { PACKAGE_ROOT_URL } from "@angular/core/src/application_tokens";
//import { AppProperties } from "@apc-ng/core/lib/config/app-properties.model";
import { Moment } from 'moment';

export interface ICustomer {
    userId : number,
	id: number;
	title: string;
	body: string;
}

export interface IPeople{
         UserName:string;
         FirstName:string;
         LastName:string;
         MiddleName:string;
         Gender:string;
         Age:string;
         Emails:Array<string>;
         FavoriteFeature:string;
         Features:Array<string>;
         HomeAddress:string;
}

export interface IProductDetails{
    ProductID : number;
    Details : string;

}

export interface IEmployee{
    EmployeeID : number;
    LastName : string;
    FirstName : string;
    Title : string;
    TitleOfCourtesy : string;
    BirthDate : Moment;
    HireDate : Moment;
    Address : string;
    City : string;
    Region : string;
    PostalCode : string;
    Country : string;
    HomePhone : string;
    Extension : string;
    Photo : any;
    Notes : string;
    ReportsTo : number;
    PhotoPath : string;
}


export enum NavigationParam {
    BusinessUnit = 'business-unit',
    Facility = 'facility',
    Field = 'field'
}

export enum QueryParam {
    Entity = 'entity',
    StartDate = 'startDate',
    EndDate = 'endDate',
    //TimeFrameRange = 'timeFrameRange',
    Chart = 'chart',
    ShowCompletion = 'showCompletion',
    Completion = 'completion',
    Interval = 'interval',
    SamplingMethod = 'samplingMethod',
    //OverrideSampling = 'overrideSampling'
}

export enum WorkflowName {
    BusinessForecast = 'business-forecast',
    FieldOverview = 'field-overview',
    ProductionDashboard = 'production-dashboard',
    FlowLinesDashboard = 'flowlines-dashboard',
    WellsDashboard = 'wells-dashboard',
    GasInjectorsDashboard = 'gas-injectors-dashboard',
    WaterInjectorsDashboard = 'water-injectors-dashboard',
    KongsbergDiagnosticChart = 'kongsberg-diagnostic-chart',
    TablesDashboard = 'production-tables',
    DiagnosticCharts = 'diagnostic-charts',
    PerformanceAnalysis = 'performance-analysis',
    PerformanceAnalysisGasInjectors = 'performance-analysis-gas-injectors',
    PerformanceAnalysisWaterInjectors = 'performance-analysis-water-injectors',
    ShutInAnalysis = 'shut-in-analysis',
    DynamicIPR = 'dynamic-ipr',
    RampUpAnalysis = 'ramp-up-analysis',
    ResSimExport = 'res-sim-export',
    WellboreConfiguration = 'wellbore-configuration',
    WellboreConfigurationGasInjectors = 'wellbore-configuration-gas-injectors',
    WellboreConfigurationWaterInjectors = 'wellbore-configuration-water-injectors',
    CO2 = 'lucius-co2',
    RampUpMonitoring = 'rampup-monitoring',
    WellRouting = 'well-routing',
    ProductionAnalysisField = 'production-analysis-field',
    ProductionAnalysisReservoir = 'production-analysis-reservoir',
    ProductionAnalysisWaterInjectors = 'production-analysis-water-injectors',
    ProductionAnalysisGasInjectors = 'production-analysis-gas-injectors',
    WellRoutingOptimization = 'well-routing-optimization',
    TargetOptimization = 'target-optimization',
    ProductionSummary = 'production-summary',
    ForecastvsActualProduction = 'forecast-vs-actual-production' ,  
    LandingPage = 'Landing'    
}

export enum BreadCrumpOption {
    show = 'show',
    hide = 'hide'
}

export enum GridName {
    LandingPageEntityGrid = 'LandingPageWellGrid',
    ShutinGrid = 'ShutinGrid',
    WellboreGrid = 'WellboreGrid',
    ChokeGrid = 'ChokeGrid',
    RampupGrid = 'RampupGrid',
    ProdDashFieldGrid = 'ProdDashFieldGrid',
    ProdDashFlowlineGrid = 'ProdDashFlowlineGrid',
    ProdDashWellGrid = 'ProdDashWellGrid',
    ProdDashWellAlertsGrid = 'ProdDashWellAlertsGrid',
    WellRoutingGrid = 'WellRoutingGrid',
    WellRoutingOptimizationWellGrid = 'WellOptimizationGrid',
    WellRoutingOptimizationFlowlineGrid = 'FlowlineOptimizationGrid',
    WellRoutingOptimizationSeperatorGrid = 'SeparatorOptimizationGrid'
}

export enum ChartName {
    ShutinChart = 'ShutInChart',
    BusniessForecastVsActual = 'BusniessForecastVsActual',
    ProdDashFieldChart = 'ProdDashFieldChart',
    LandingPageChartGas = 'LandingPageChartGas',
    LandingPageChartOil = 'LandingPageChartOil',
    LandingPageChartWater = 'LandingPageChartWater',
    ProdDashExportOilChart = 'ProdDashExportOilChart',
    ProdDashExportGasChart = 'ProdDashExportGasChart',
    ProdDashboardFlowlinesEntityChart = 'ProdDashboardFlowlinesWellChart',
    ProdDashboardFlowlinesFlowlineChart = 'ProdDashboardFlowlinesFlowlineChart',
    ChokeChart = 'ChokeChart',
    RampupChart = 'RampupChart',
    LuciusCO2Chart = 'Lucius CO2',
    LandingPageChartGasInj = 'LandingPageChartGasInj',
    LandingPageChartWaterInj = 'LandingPageChartWaterInj',
    ProdSummaryVolumeChartGas = 'ProdSummaryVolumeChartGas',
    ProdSummaryVolumeChartOil = 'ProdSummaryVolumeChartOil',
    ProdSummaryDefermentChartGas = 'ProdSummaryDefermentChartGas',
    ProdSummaryDefermentChartOil = 'ProdSummaryDefermentChartOil',
    ProdSummaryDowntime = 'ProdSummaryDowntime',
    ProdSummaryVolumeChart = 'ProdSummaryVolumeChart',
    ProdSummaryDefermentChart = 'ProdSummaryDefermentChart',
    ForecastvsActualProductionChartOil = 'ForecastvsActualProductionChartOil',
    ForecastvsActualProductionChartGas = 'ForecastvsActualProductionChartGas',
    ForecastvsActualProductionChartGrossBOE = 'ForecastvsActualProductionChartGrossBOE',
    ForecastvsActualProductionChartGasInj = 'ForecastvsActualProductionChartGasInj',
    ForecastvsActualProductionChartWaterInj = 'ForecastvsActualProductionChartWaterInj'
}

//-->For assets
export class BusinessUnit {
    private _businessUnitName: string;
    private _description: string;
    private _facilities: Facility[];
    private _workflows: Workflow[];

    get businessUnitName(): string {
        return this._businessUnitName;
    }
    set businessUnitName(value: string) {
        this._businessUnitName = value;
    }

    get description(): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }

    get facilities(): Facility[] {
        return this._facilities;
    }
    set facilities(value: Facility[]) {
        this._facilities = value;
    }

    get workflows(): Workflow[] {
        return this._workflows;
    }
    set workflows(value: Workflow[]) {
        this._workflows = value;
    }    
}

export class WorkflowComponent {
    private _id: number;
    private _name: string;
    private _permission: string;

    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get permission(): string {
        return this._permission;
    }
    set permission(value: string) {
        this._permission = value;
    }
}

export class Workflow {
    private _id: number;
    private _name: string;
    private _description: string;
    private _permission: string;
    private _orderById: number;
    private _workflowComponents: WorkflowComponent[];
    private _entityType: EntityType;
    private _fluidType: string;
    private _category: string;
    private _entitySubType: EntitySubType;

    constructor(name: string) {
        this._name = name;
    }


    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }


    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get category(): string {
        return this._category;
    }
    set category(value: string) {
        this._category = value;
    }


    get description(): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }


    get permission(): string {
        return this._permission;
    }
    set permission(value: string) {
        this._permission = value;
    }


    get orderById(): number {
        return this._orderById;
    }
    set orderById(value: number) {
        this._orderById = value;
    }


    get workflowComponents(): WorkflowComponent[] {
        return this._workflowComponents;
    }
    set workflowComponents(value: WorkflowComponent[]) {
        this._workflowComponents = value;
    }


    get entityType(): EntityType {
        return this._entityType;
    }
    set entityType(value: EntityType) {
        this._entityType = value;
    }


    get fluidType(): string {
        return this._fluidType;
    }
    set fluidType(value: string) {
        this._fluidType = value;
    }
    get entitySubType(): EntitySubType {
        return this._entitySubType;
    }
    set entitySubType(value: EntitySubType) {
        this._entitySubType = value;
    }
}

export class Facility {
    private _facilityName: string;
    private _fields: Field[];

    get facilityName(): string {
        return this._facilityName;
    }
    set facilityName(value: string) {
        this._facilityName = value;
    }
    get fields(): Field[] {
        return this._fields;
    }
    set fields(value: Field[]) {
        this._fields = value;
    }
}


export class NavigationField {

    private _name: string;
    private _displayName: string;
    private _workflows: Workflow[];
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get displayName(): string {
        return this._displayName;
    }
    set displayName(value: string) {
        this._displayName = value;
    }

    get workflows(): Workflow[] {
        return this._workflows;
    }
    set workflows(value: Workflow[]) {
        this._workflows = value;
    }

    constructor(field: NavigationField) {
        
        if (field) {
            Object.keys(field).forEach(key => {
                this[key] = field[key];
            })
        }
    }

}

export class Field {
    private _name: string;
    private _displayName: string;
    private _description: string;
    private _budgetId: string;
    private _workflows: Workflow[];
    private _entities: Entity[];


    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get displayName(): string {
        return this._displayName;
    }
    set displayName(value: string) {
        this._displayName = value;
    }

    get description(): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }

    get budgetId(): string {
        return this._budgetId;
    }
    set budgetId(value: string) {
        this._budgetId = value;
    }

    get workflows(): Workflow[] {
        return this._workflows;
    }
    set workflows(value: Workflow[]) {
        this._workflows = value;
    }

    get entities(): Entity[] {
        return this._entities;
    }
    set entities(value: Entity[]) {
        this._entities = value;
    }

    constructor(field: Field) {
        if (field) {
            Object.keys(field).forEach(key => {
                this[key] = field[key];
            })
        }
    }


    getFirstOilDate(): Date {
        let minFirstOilDate: Date = null;
        if (this.entities && this.entities.length > 0) {
            this.entities.filter(x => x.firstOilDate).forEach(x => {
                const firstOilDate = new Date(x.firstOilDate);
                if (!minFirstOilDate || firstOilDate < minFirstOilDate) {
                    minFirstOilDate = firstOilDate;
                }
            })
        }
        if (!minFirstOilDate) {
            minFirstOilDate = moment().subtract(5, 'years').toDate();
        }
        return minFirstOilDate;
    }
}

export class Entity {
    private _entityInstanceId: string;
    private _entityInstanceName: string;
    private _entityType: EntityType;
    private _entitySubType: string;
    private _completions: Completion[];
    private _fluidType: string;
    private _active: boolean;
    private _firstOilDate: Date;


    get entityInstanceId(): string {
        return this._entityInstanceId;
    }
    set entityInstanceId(value: string) {
        this._entityInstanceId = value;
    }


    get entityInstanceName(): string {
        return this._entityInstanceName;
    }
    set entityInstanceName(value: string) {
        this._entityInstanceName = value;
    }


    get entityType(): EntityType {
        return this._entityType;
    }
    set entityType(value: EntityType) {
        this._entityType = value;
    }


    get entitySubType(): string {
        return this._entitySubType;
    }
    set entitySubType(value: string) {
        this._entitySubType = value;
    }

    get completions(): Completion[] {
        return this._completions;
    }
    set completions(value: Completion[]) {
        this._completions = value;
    }


    get fluidType(): string {
        return this._fluidType;
    }
    set fluidType(value: string) {
        this._fluidType = value;
    }


    get active(): boolean {
        return this._active;
    }
    set active(value: boolean) {
        this._active = value;
    }


    get firstOilDate(): Date {
        return this._firstOilDate;
    }
    set firstOilDate(value: Date) {
        this._firstOilDate = value;
    }
}

export class Completion {
    private _cmplNum: string;
    private _cmplName: string;
    private _completionStatusDesc: string;
    private _isActive: boolean;

    get cmplNum(): string {
        return this._cmplNum;
    }
    set cmplNum(value: string) {
        this._cmplNum = value;
    }

    get cmplName(): string {
        return this._cmplName;
    }
    set cmplName(value: string) {
        this._cmplName = value;
    }

    get completionStatusDesc(): string {
        return this._completionStatusDesc;
    }
    set completionStatusDesc(value: string) {
        this._completionStatusDesc = value;
    }

    get isActive(): boolean {
        return this._isActive;
    }
    set isActive(value: boolean) {
        this._isActive = value;
    }
}

// //-->For Application Context
// export interface AppContext {
//     businessUnit: BusinessUnit;
//     facility: Facility;
//     field: Field;
//     workflow: Workflow;
//     entity: Entity;
//     completion: Completion;
//     startDate: Date;
//     endDate: Date;
//     timeFrameRange: TimeFrameRange;
//     interval: number;
//     samplingMethod: SamplingMethod;
//     overrideSampling: Boolean;
//     isShowCompletion: boolean;
//     isChkMPFMWells: boolean;
//     isShowSidebar: boolean;
// }

export enum EntityType {
    FACILITY = "Facility",
    FIELD = "Field",
    WELL = "Well",
    RESERVOIR = "Reservoir"
}

export enum EntitySubType {
    PRODUCER = "PRODUCER", // To match Producer-Oil,Producer-Gas,Producer-Water.
    WATER_INJECTOR = "INJECTOR-WATER",
    GAS_INJECTOR = "INJECTOR-GAS"
}

export interface ParamModel {
    paramName: string;
    paramValue: any;
    quality: string;
}

export interface EventSaveModel {
    entityInstanceId: string;
    eventStartDate: string;
    eventEndDate: string;
    completion: string;
    params: ParamModel[];
}

export interface GridFilter {
    key: string,
    value: any,
    enabled: boolean
}

export class FullStoryConfig {
    id: string;
    on: boolean = false;
}

// export class IpsoAppProperties extends AppProperties {
//     properties: Dictionary<string>;
//     fullStory: FullStoryConfig = new FullStoryConfig();
// }
export interface Dictionary<T> {
    [index: string]: T;
}

export enum IPSOParam {
    MPFM_OIL = "MPFM_OilRate"
}

export class UserDirectory {
    building: string;
    cellPhone: string;
    costCenter: string;
    department: string;
    emailAddress: string;
    employeeId: string;
    employmentStatus: string;
    encodedImage: string;
    expired: string;
    extension: string;
    firstName: string;
    internalPartner: string;
    lastName: string;
    location: string;
    name: string;
    picture: string;
    roomNumber: string;
    supervisorId: string;
    supervisorName: string;
    telephone: string;
    title: string;
    userId: string;
    workSchedule: string;
}