import { EntityType, Completion, Field, Workflow, Facility, BusinessUnit, Entity, WorkflowComponent, NavigationField } from "./app.model";
//import { TimeFrameRange, SamplingMethod } from "../time-frame/time-frame.model";
import * as moment from 'moment';
import { Observable } from 'rxjs';
//import { CoreToasterService } from "./core.toaster.service";

export class Context {

    private _allBusinessUnits: BusinessUnit[];
    private _businessUnit: BusinessUnit;
    private _facility: Facility;
    private _field: Field;
    private _workflow: Workflow;
    private _entity: Entity;
    private _completion: Completion;
    private _startDate: Date = null;
    private _endDate: Date = null;
    //private _timeFrameRange: TimeFrameRange;
    private _interval: number;
    //private _samplingMethod: SamplingMethod;
    private _overrideSampling: boolean;
    private _isShowCompletion: boolean;
    private _isChkMPFMWells: boolean;
    private _isShowSidebar: boolean = false;
    private _isMobile: boolean = false;
    private _zoomOutStartDate: Date = null;
    private _zoomOutEndDate: Date = null;
    private _pinSwitched: boolean = false;    
    private _navigationField : NavigationField = null;
    private _isLoggedIn : boolean = false;
    private _userToken : any = false;
    //private _isShowSidebarO : Observable<boolean> = true;
    //private _navigationField: Observable<Array<NavigationField>>;
    constructor() { }

    get isLoggedIn () : boolean {
        return this._isLoggedIn;
    }

    set isLoggedIn (value : boolean) {
        this._isLoggedIn = value;
    }

    get userToken () : any {
        return this._userToken;
    }

    set userToken (value : any){
        this._userToken = value;
    }

    get allBusinessUnits(): BusinessUnit[] {
        if (this._allBusinessUnits) {
            return this._allBusinessUnits;
        }
        return [];
    }

    set allBusinessUnits(value: BusinessUnit[]) {
        this._allBusinessUnits = value;
    }

    get businessUnit(): BusinessUnit {
        return this._businessUnit;
    }

    set businessUnit(businessUnit: BusinessUnit) {
        if (!this._businessUnit || !businessUnit || this._businessUnit.businessUnitName !== businessUnit.businessUnitName) {
            this.facility = null;
        }
        if (!businessUnit){
            this._isShowSidebar = false;
        } else {
            this._isShowSidebar = true;
        }
        this._businessUnit = businessUnit;
    }

    get businessUnitName(): string {
        if (this._businessUnit) {
            return this._businessUnit.businessUnitName;
        }
        return null;
    }

    set allFacilities(value: Facility[]) {
        if (this.businessUnit) {
            this.businessUnit.facilities = value;            
        }
    }

    get allFacilities() {
        if (this.businessUnit && this.businessUnit.facilities) {           
            return this.businessUnit.facilities;
        }
        return [];
    }  
    get allFieldsByBusinessUnit() {   
        const fields = [];    
        if (this.businessUnit && this.businessUnit.facilities) {        
            if (this.businessUnit.facilities) {
                this.businessUnit.facilities.map(facility => {
                    if (facility.fields) {
                        facility.fields.map(field => {                       
                            fields.push(field);                       
                        });
                    }
                }); 
             }
             return fields;
        }
        return [];
    }    
    get facility() {
        return this._facility;
    }

    set facility(facility: Facility) {
        if (!this._facility || !facility || this._facility.facilityName !== facility.facilityName) {
            this.field = null;
        }
        this._facility = facility;
    }

    get facilityName(): string {
        if (this._facility) {
            return this._facility.facilityName;
        }
        return null;
    }

    get field() {
        return this._field;
    }

    set field(field: Field) {
        if (!this._field || !field || this._field.name !== field.name) {
            this.entity = null;
        }
        this._field = new Field(field);
        // if (this.timeFrameRange === TimeFrameRange.All) {
        //     this._startDate = this.firstOilDate; //new first oil date after change of field
        // }
    }

    get navigationField() {
        return this._navigationField;
    }

    set navigationField(navigationField: NavigationField) {
        // if (!this._navigationField || !navigationField || this._navigationField.name !== navigationField.name) {
        //     this.entity = null;
        // }
        this._navigationField = new NavigationField(navigationField);

    }

    get allNavigationWorkflows(): Workflow[] {

        if (this._navigationField && this._navigationField.workflows) {
            return this._navigationField.workflows;
        } 
        return [];
    }
    

    get fieldName(): string {
        if (this._field) {
            return this._field.name;
        }
        return null;
    }
    get fieldDisplayName(): string {
        if (this._field) {
            return this._field.displayName;
        }
        return null;
    }
    get fieldBudgetId(): string {
        if (this._field) {
            return this._field.budgetId;
        }
        return null;
    }

    get allFields(): Field[] {
        if (this._facility && this._facility.fields) {
            return this._facility.fields;
        }
        return [];
    }

    get workflow(): Workflow {
        return this._workflow;
    }

    set workflow(workflow: Workflow) {
        if (!this._workflow || !workflow || this._workflow.name !== workflow.name) {
            this.startDate = null;
            this.endDate = null;
            this.showCompletion = false;
        }
        this._workflow = workflow;
    }

    get workflowId(): number {
        if (this._workflow) {
            return this._workflow.id;
        }
        return null;
    }

    get workflowName(): string {
        if (this._workflow) {
            return this._workflow.name;
        }
        return null;
    }

    get workflowDescription(): string {
        if (this._workflow) {
            return this._workflow.description;
        }
        return null;
    }

    get workflowEntityType(): EntityType {
        if (this._workflow) {
            return this._workflow.entityType;
        }
        return null;
    }

    get workflowFluidType(): string {
        if (this._workflow) {
            return this._workflow.fluidType;
        }
        return null;
    }

    get entity(): Entity {
        return this._entity;
    }

    set entity(entity: Entity) {
        if (!this._entity || !entity || this._entity.entityInstanceId !== entity.entityInstanceId) {
            this.completion = null;
        }
        this._entity = entity;
        // if (this.timeFrameRange === TimeFrameRange.All) {
        //     this._startDate = this.firstOilDate; //new first oil date after change of entity
        // }
    }

    get entityName(): string {
        if (this._entity) {
            return this._entity.entityInstanceName;
        }
        return null;
    }

    get entityInstanceId(): string {
        if (this._entity) {
            return this._entity.entityInstanceId;
        }
        return null;
    }

    set entityInstanceId(value: string) {
        if (value === this.entityInstanceId) {
            return;
        }

        const matchingEntity = this.allEntities.find(x => x.entityInstanceId === value);
        if (!!matchingEntity) {
            this.entity = matchingEntity;
        } else if ([EntityType.FACILITY, EntityType.FIELD].indexOf(this.workflowEntityType) >= 0) {
            this.entity = null;
        } else if (this.workflowEntities.length > 0) {
            const activeEntities = this.workflowEntities.filter(x => x.active);
            this.entity = activeEntities.length > 0 ? activeEntities[0] : this.workflowEntities[0];
        }
    }

    get workflowEntities(): Entity[] {
        if (this._workflow && this._field && this._field.entities) {
            return this._field.entities.filter(x => x.entityType === this._workflow.entityType && (this._workflow.entitySubType ? x.entitySubType.indexOf(this._workflow.entitySubType) !== -1 : x.fluidType === this._workflow.fluidType));
        }
        return []
    }

    get allEntities(): Entity[] {
        if (this.field && this.field.entities) {
            return this.field.entities;
        }
        return [];
    }

    get completion(): Completion {
        return this._completion;
    }

    set completion(completion: Completion) {
        this._completion = completion;
    }

    get allCompletions() {
        if (this._entity && this._entity.completions) {
            return this._entity.completions;
        }
        return [];
    }

    get completionNumber(): string {
        if (this._completion && this._isShowCompletion) {
            return this._completion.cmplNum;
        }
        return null;
    }

    set completionNumber(value: string) {
        this.completion = this.allCompletions.find(x => x.cmplNum === value);
    }

    get startDate(): Date {
        return this._startDate;
    }

    set startDate(startDate: Date) {
        if (this._startDate !== startDate) {
            this._startDate = startDate;
            //this._timeFrameRange = null;
        }
    }

    get endDate(): Date {
        return this._endDate;
    }

    set endDate(endDate: Date) {
        if (this._endDate !== endDate) {
            this._endDate = endDate;
            //this._timeFrameRange = null;
        }
    }

    // get timeFrameRange(): TimeFrameRange {
    //     return this._timeFrameRange;
    // }

    // set timeFrameRange(range: TimeFrameRange) {
    //     this._timeFrameRange = range;

        // if (this._timeFrameRange) {
        //     this._endDate = new Date();

        //     let currentDate = moment();

        //     if (this._timeFrameRange === TimeFrameRange.OneDay) {
        //         currentDate.subtract(1, 'day');
        //     } else if (this._timeFrameRange === TimeFrameRange.OneWeek) {
        //         currentDate.subtract(1, 'week');
        //     } else if (this._timeFrameRange === TimeFrameRange.OneMonth) {
        //         currentDate.subtract(1, 'month');
        //     } else if (this._timeFrameRange === TimeFrameRange.OneYear) {
        //         currentDate.subtract(1, 'year');
        //     } else if (this._timeFrameRange === TimeFrameRange.FiveYears) {
        //         currentDate.subtract(5, 'years');
        //     } else if (this._timeFrameRange === TimeFrameRange.All) {
        //         currentDate = moment(this.firstOilDate);
        //     }

        //     if (currentDate.toDate() < this.firstOilDate) {
        //         currentDate = moment(this.firstOilDate);
        //     }
        //     this._startDate = currentDate.toDate();
        // }
    //}

    get firstOilDate(): Date {
        if (this.workflow && this._workflow.entityType === EntityType.FIELD) {
            return this._field.getFirstOilDate();
        } else if (this._entity) {
            if (this._entity.firstOilDate) {
                return new Date(this._entity.firstOilDate);
            }
        }
        return moment().subtract(5, 'years').toDate();
    }

    get interval(): number {
        return this._interval;
    }

    set interval(interval: number) {
        if (this._interval !== interval) {
            this._interval = interval;
        }
    }

    // get samplingMethod(): SamplingMethod {
    //     return SamplingMethod;
    // }

    // set samplingMethod(samplingMethod: SamplingMethod) {
    //     // if (this._samplingMethod !== samplingMethod) {
    //     //     this._samplingMethod = samplingMethod;
    //     // }
    // }

    get overrideSampling(): boolean {
        return this._overrideSampling;
    }

    set overrideSampling(overrideSampling: boolean) {
        if (this._overrideSampling !== overrideSampling) {
            this._overrideSampling = overrideSampling;
        }
    }

    get showCompletion() {
        return !!this.completion || this._isShowCompletion;
    }

    set showCompletion(isShowCompletion: boolean) {
        this._isShowCompletion = isShowCompletion;
        if (this._isShowCompletion && !this._completion) {
            this.completion = this.allCompletions.find(x => x.cmplNum.toLowerCase() === "all");
        }
    }

    get workflowComponents(): WorkflowComponent[] {
        if (this._workflow && this._workflow.workflowComponents) {
            return this._workflow.workflowComponents;
        }
        return [];
    }

    get allWorkflows(): Workflow[] {
        if (this._field && this._field.workflows) {
            return this._field.workflows;
        } else if (this._businessUnit && this._businessUnit.workflows) {
            return this._businessUnit.workflows;
        }
        return [];
    }

    get isChkMPFMWells(): boolean {
        return this._isChkMPFMWells;
    }

    set isChkMPFMWells(value: boolean) {
        this._isChkMPFMWells = value;
    }

    get isShowSidebar(): boolean {
        return this._isShowSidebar;
    }

    set isShowSidebar(value: boolean) {
        this._isShowSidebar = value;
    }

    // get isShowSidebarO(): Observable<boolean> {
    //     return this._isShowSidebarO;
    // }

    // set isShowSidebarO(value: Observable<boolean>) {
    //     this._isShowSidebarO = value;
    // }


    get isMobile(): boolean {
        return this._isMobile;
    }
    set isMobile(value: boolean) {
        this._isMobile = value;
    }
    get pinSwitched() {
        return this._pinSwitched;
    }
    set pinSwitched(value: boolean) {
        this._pinSwitched = value;
    }
    get zoomOutStartDate(): Date {
        return this._zoomOutStartDate;
    }

    set zoomOutStartDate(zoomOutStartDate: Date) {
        this._zoomOutStartDate = zoomOutStartDate;
    }

    get zoomOutEndDate(): Date {
        return this._zoomOutEndDate;
    }

    set zoomOutEndDate(zoomOutEndDate: Date) {
        this._zoomOutEndDate = zoomOutEndDate;
    }

}