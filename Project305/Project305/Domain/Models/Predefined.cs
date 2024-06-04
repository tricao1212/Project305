using System.ComponentModel.DataAnnotations;

namespace Project305.Domain.Models
{
    public class Predefined : BaseEntity
    {
        [Required]
        public string Temperature { get; set; }
        [Required]
        public string BloodPressure { get; set; }
        [Required]
        public string HeartRate { get; set; }
    }
}
