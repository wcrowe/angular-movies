using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using movies_api.Validations;

namespace movies_api.Entities
{
    public class Genre ///: IValidatableObject 
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "The field with name {0} is required")]
        [StringLength(50)]
        [FirstLetterUppercase]
        public string Name { get; set; }


        // Made a custom firstletter uppercase attribute validator
        // public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        // {
        //     if (!string.IsNullOrEmpty(Name)){

        //         var firstLetter = Name[0].ToString();
        //         if (firstLetter != firstLetter.ToUpper()){
        //             yield return new ValidationResult("First Letter Must Be UpperCase", new string[] { nameof(Name) });
        //         }
        //     }
        // }
    }
}