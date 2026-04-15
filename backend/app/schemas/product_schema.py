from pydantic import BaseModel, field_validator
from datetime import datetime
from typing import Optional, Dict

from app.schemas.nutrition_schema import NutritionAnalysisResponse, IngredientAnalysis


class ProductResponse(BaseModel):
    """
    Clean API response model for product data.
    """

    id: int
    barcode: str
    name: Optional[str]
    brand: Optional[str]
    category: Optional[str]
    image_url: Optional[str]
    nutriscore: Optional[str]

    energy_kcal: Optional[float]
    fat: Optional[float]
    saturated_fat: Optional[float]
    sugars: Optional[float]
    salt: Optional[float]
    protein: Optional[float]
    fiber: Optional[float]

    cached_at: datetime

    @field_validator("nutriscore", mode="before")
    @classmethod
    def format_nutriscore(cls, value: str) -> str:
        if not value:
            return "N/A"
        
        val_strip = str(value).strip().lower()
        
        if val_strip in ("not-applicable", "unknown", "n/a"):
            return "N/A"
            
        return value.upper()

    class Config:
        from_attributes = True