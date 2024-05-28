using System.ComponentModel.DataAnnotations;

namespace Project305.Domain.Models
{
    public class Predefined : BaseEntity
    {
        [Required]
        public double Temperature { get; set; }
        [Required]
        public double BloodPressure { get; set; }
        [Required]
        public double HeartRate { get; set; }
    }
}
