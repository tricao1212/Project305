using System.ComponentModel.DataAnnotations;

namespace Project305.Domain.Models
{
    public class Patient : BaseEntity
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public DateTime Dob {  get; set; }
        public int PredefinedId { get; set; }
        public Predefined Predefined { get; set; }
    }
}
