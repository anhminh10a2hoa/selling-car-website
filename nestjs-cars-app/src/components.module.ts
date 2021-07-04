import { Module } from "@nestjs/common";
import { CarsModule } from "./components/cars/cars.module";

@Module({
    imports: [CarsModule]
})
export class ComponentsModule {

}