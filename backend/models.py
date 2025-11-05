from pydantic import BaseModel
from typing import Optional
from datetime import date
from enum import Enum

#------- ENUMS --------------
class Sex(str,Enum):
    MALE = "Male"
    FEMALE = "Female"
    UNDISCLOSED = "Undisclosed"

class Role(str,Enum):
    CHILD = "Child"
    ADOPTED_CHILD = "Adopted_child"
    SPOUSE = "Spouse"
    PARTNER = "Partner"

#------- MODELS --------------
class Person(BaseModel):  
    firstname: str
    middlename: Optional[str] = None
    lastname: Optional[str] = None
    birth: Optional[date] = None
    death: Optional[date] = None
    photo: Optional[str] = None
    birthplace: Optional[str] = None
    deathplace: Optional[str] = None
    sex: Sex = Sex.UNDISCLOSED

class Relationship(BaseModel):
    person: int
    related_person: int
    relationship_type: Role
    start_date: Optional[date] = None
    end_date: Optional[date] = None