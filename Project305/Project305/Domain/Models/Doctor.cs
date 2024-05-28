using System.ComponentModel.DataAnnotations;

namespace Project305.Domain.Models
{
    public class Doctor : BaseEntity
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
    }
}
