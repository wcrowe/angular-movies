
using System.ComponentModel.DataAnnotations;

namespace movies_api.Validations
{
    public class FirstLetterUppercaseAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            // This is already handled by required attribute in the model.
            // Don't repeate validations.
            if (value == null || string.IsNullOrEmpty(value.ToString()))
            {
                return ValidationResult.Success;
            }

            var firstLetter = value.ToString()[0].ToString();

            if (firstLetter != firstLetter.ToUpper())
            {
                return new ValidationResult("First letter needs to be Uppercase");
            }

            return ValidationResult.Success;
            // return base.IsValid(value, validationContext);
        }
    }

}