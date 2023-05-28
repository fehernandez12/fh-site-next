import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AlertMixin = Swal.mixin({
  background: "#BEBEBE",
});

const Alert = withReactContent(AlertMixin);

abstract class AlertUtils {
  static success(title: string, text: string) {
    return Alert.fire({
      title,
      text,
      icon: "success",
    });
  }

  static error(title: string, text: string) {
    return Alert.fire({
      title,
      text,
      icon: "error",
    });
  }
}

export { AlertUtils };
