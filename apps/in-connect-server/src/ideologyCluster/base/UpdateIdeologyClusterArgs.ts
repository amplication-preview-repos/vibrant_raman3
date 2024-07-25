/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IdeologyClusterWhereUniqueInput } from "./IdeologyClusterWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { IdeologyClusterUpdateInput } from "./IdeologyClusterUpdateInput";

@ArgsType()
class UpdateIdeologyClusterArgs {
  @ApiProperty({
    required: true,
    type: () => IdeologyClusterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IdeologyClusterWhereUniqueInput)
  @Field(() => IdeologyClusterWhereUniqueInput, { nullable: false })
  where!: IdeologyClusterWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => IdeologyClusterUpdateInput,
  })
  @ValidateNested()
  @Type(() => IdeologyClusterUpdateInput)
  @Field(() => IdeologyClusterUpdateInput, { nullable: false })
  data!: IdeologyClusterUpdateInput;
}

export { UpdateIdeologyClusterArgs as UpdateIdeologyClusterArgs };
